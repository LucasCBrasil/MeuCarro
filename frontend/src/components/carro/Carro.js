import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Carro(carro) {

    return (
      <div>
          <div>
            <fieldset>
              <div>
                <div>
                  <input className="carInput" id="name" type="text" disabled value={carro.carro.marca + " " + carro.carro.modelo + " - " + carro.carro.ano}  />
                </div>
                <div>
                  <input className="carInput" id="color" type="text" disabled value={"Cor: " + carro.carro.cor}/>
                </div>
                <div>
                  <input className="carInput" id="km" type="text" disabled value={"Quilômetros rodados: " + carro.carro.quilometros + " Km"}/>
                </div>
                <div>
                  <input className="carInput" id="price" type="text" disabled value={"Preço: R$ " + carro.carro.preco}/>
                </div>
                  <Link to={`/${carro.carro.id}`}>
                    <button title="Detalhes">
                      Detalhes
                    </button>
                  </Link> 
                  <button title="Favoritar">
                    Favoritar
                  </button>
                  <div className="imagemDiv">
                    <img src={carro.carro.imagem} className="image"></img>
                  </div>
              </div>
            </fieldset>
          </div>
      </div>
    );
  }

export default Carro;

