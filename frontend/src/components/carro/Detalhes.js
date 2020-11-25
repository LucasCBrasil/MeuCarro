import React, { useState, useEffect } from 'react';
import { urlGetCarro, getRequestInit} from '../../utils/request';

function Detalhes(props) {

    const [carro, setCarro] = useState(0);

    useEffect(() => {
        fetch(urlGetCarro.replace('{id}', props.match.params.id), getRequestInit)
            .then(res => res.json())    
            .then(response => {
                setCarro(response);
            })
            .catch(error => console.log(error))
    }, []);

    return(
        <div className="detailsList">
            <div className="gridItem">
                <img className="carImage" src={carro.imagem}/>
            </div>
            <div className="gridItem">
                <div>
                    <input className="carName" type="text" disabled value={carro.marca + " " + carro.modelo + " - " + carro.ano}  />
                </div>
            </div>
            <div className="gridItem">
                <div>
                    <input className="input" type="text" disabled value={"Preço: " + carro.preco}/>
                </div>
                <div>
                    <input className="input" type="text" disabled value={"Data de Emplacamento: " + carro.emplacamento}/>
                </div>
                <div>
                    <input className="input" type="text" disabled value={"Câmbio: " + carro.cambio}/>
                </div>
                <div>
                    <input className="input" type="text" disabled value={"Vidros: " + carro.vidros}/>
                </div>
                <div>
                    <input  className="input" type="text" disabled value={"Tecido dos Bancos: " + carro.tecido_bancos}/>
                </div>
                <div>
                    <input className="input" type="text" disabled value={"Computador de Bordo: " + carro.computador_bordo}/>
                </div>
            </div>
        </div>
    )
}

export default Detalhes;