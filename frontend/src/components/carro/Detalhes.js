import React, { useState } from 'react';
import Header from '../app/Header';

function Detalhes(props) {

    const [check, setCheck] = useState(false)
    const change = () => setCheck(!check)

    return(
        <div>
            <Header></Header>
            <img src={props.imagem} width="400" height="200"/>
            <div>
                <input type="text" disabled value={props.marca + " " + props.modelo + " - " + props.ano}  />
            </div>
            <div>
                <input type="text" disabled value={"Preço: " + props.preco}/>
            </div>
            <div>
                <input type="text" disabled value={"Data de Emplacamento:" + props.emplacamento}/>
            </div>
            <div>
                <input type="text" disabled value={"Câmbio:" + props.cambio}/>
            </div>
            <div>
                <input type="text" disabled value={"Vidros:" + props.vidros}/>
            </div>
            <div>
                <input type="text" disabled value={"Tecido dos Bancos:" + props.tecido_bancos}/>
            </div>
            <div>
                <input type="text" disabled value={"Computador de Bordo:" + props.computador_bordo}/>
            </div>
            <p>
                <input type="checkbox" defaultChecked={props.check} onChange={change}/>
                {check && <span>Adicionado aos favoritos</span> || <span>Favoritar</span>}
            </p>
        </div>
    )
}

export default Detalhes;