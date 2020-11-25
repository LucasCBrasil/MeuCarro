import React, { useState } from 'react';

function CarroForm(carro) {
    return (
        <div>
            <form action="/carro" method="post">
                <ul>
                <h1>Cadastrar Novo Carro</h1>
                <li>
                <input type="text" id="marcaid" placeholder="Fiat" required="required" name="marca" />
                <label for="marca">Marca</label>
                </li>
                <li>
                <input type="text" id="modeloid" placeholder="Mobi" required="required" name="modelo" />
                <label for="modelo">Modelo</label>
                </li>
                <li>
                <input type="number" id="anoid" placeholder="2020" required="required" name="ano" />
                <label for="ano">Ano de Fabricação</label>
                </li>
                <li>
                <input type="text" id="corid" placeholder="Preto" required="required" name="cor" />
                <label for="cor">Cor</label>
                </li>
                <li>
                <input type="text" id="modeloid" placeholder="10" required="required" name="quilometros" />
                <label for="quilometros">Quilômetros Rodados</label>
                </li>
                <li>
                <input type="number" id="precoid" placeholder="10" required="required" name="preco" />
                <label for="preco">Preço</label>
                </li>
                <li>
                <input type="text" id="imagemid" placeholder="https://www.carroclub.com.br/foto/hyundai-ix35-712c0e8c-1c97-4eff-be2d-4bc345caee05" required="required" name="imagem" />
                <label for="imagem">Imagem(Link para imagem na web)</label>
                </li>
                <li class="button">
                    <button type="submit">Salvar</button>
                </li>
                </ul>
            </form>
        </div>
    )
} 

export default CarroForm;