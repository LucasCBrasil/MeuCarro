import React, { useState, useEffect } from 'react';
import Carro from '../carro/Carro.js';
import { urlGetCarros, getRequestInit, urlGetMarcas } from '../../utils/request';
import FilterProduct from '../Filter/Filter.js';

function ListaCarros(){
    const [carros, setCarros] = useState([]);
    const [carrosList, setCarrosList] = useState([]);
    const [marcas, setMarcas] = useState([]);
    const optionDefault = { text: "Selecione uma categoria", value: 0 };
    
    useEffect(() => {
        fetch(urlGetMarcas, getRequestInit)
            .then(res => res.json())    
            .then(response => {
                setMarcas(response);
            })
            .catch(error => console.log(error))
    }, []);

    useEffect(() => {
        fetch(urlGetCarros, getRequestInit)
            .then(res => res.json())    
            .then(response => {
                setCarros(response);
                setCarrosList(response);
            })
            .catch(error => console.log(error))
    }, []);

    var filter = (atribute, value) => {
        if (value == optionDefault.value) {
            setCarrosList(carros);
        } else {
            let listFilter = [];
            carros.filter(car => car[atribute] === value).map(carFiltered => (
                listFilter.push(carFiltered)
            ))
            setCarrosList(listFilter);
        }
    }

    return (
        <>
            <p className="listTitle"><b>Lista de Carros disponíveis para venda</b></p>

            <FilterProduct
                        plural_name="Marca"
                        singular_name = "marca"
                        marcas={marcas}
                        functionFilter={filter} />
                        
            <div className="carList">
                {carrosList.map(car => {
                    return (
                        <Carro carro={car} key={car.id}/>);
                })} 
            </div>
        </>
    );   
}

export default ListaCarros;