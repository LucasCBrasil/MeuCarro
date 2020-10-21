import React, { useState } from 'react';

function Carro(carro) {
  const [check, setCheck] = useState(false)
  const change = () => setCheck(!check)

  return (
    <div>
        <div>
          <fieldset>
            <div>
              <div>
                <input id="name" type="text" disabled value={carro.carro.marca + " " + carro.carro.modelo + " - " + carro.carro.ano}  />
              </div>
              <div>
                <input id="price" type="text" disabled value={"Preço: R$ " + carro.carro.preco}/>
              </div>
                  <button title="Detalhes" type="button" >
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

