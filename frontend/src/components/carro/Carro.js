import React, { useState } from 'react';

function Carro(props) {
  const [check, setCheck] = useState(false)
  const change = () => setCheck(!check)

  return (
    <div>
        <div>
          <fieldset>
            <div>
              <img src={props.imagem} width="400" height="200"/>
              <div>
                <input type="text" disabled value={props.marca + " " + props.modelo + " - " + props.ano}  />
              </div>
              <div>
                <input type="text" disabled value={"Preço: " + props.preco}/>
              </div>
                <button title="Detalhes" type="button">
                  Detalhes
                </button>
                <p>
                  <input type="checkbox" defaultChecked={check} onChange={change}/>
                  {check && <span>Adicionado aos favoritos</span> || <span>Favoritar</span>}
                </p>
            </div>
          </fieldset>
        </div>
    </div>
  );
}

export default Carro;