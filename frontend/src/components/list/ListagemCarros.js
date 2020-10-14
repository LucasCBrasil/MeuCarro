import React, { useState, useEffect } from 'react';
import Carro from '../carro/Carro.js';
import { urlGetProducts, getRequestInit } from '../../utils/request';

function ListaCarros(){
    const [carros, setCarros] = useState([]);

    useEffect(() => {
        fetch(urlGetProducts, getRequestInit)
            .then(res => res.json())
            .then(response => {
                setCarros(response);
            })
            .catch(error => console.log(error))
    });
    return (
        <>
            <p className="listTitle"><b>Lista de Carros disponíveis para venda</b></p>
            <div className="carList">
                {carros.map((car) => <Carro carro={car}/>)}  
            </div>
        </>
    );   
}

export default ListaCarros;