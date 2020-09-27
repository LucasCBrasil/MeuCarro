import React from 'react';
import './App.css';
import Carro from '../carro/Carro.js'
import imagemFiesta from "../../images/fiesta.jpg"
import imagemIx35 from "../../images/ix35.png"
import imagemCorolla from "../../images/corolla.JPG"
import imagemEcoSport from "../../images/ecosport.jpg"
import imagemOnix from "../../images/onix.jpg"
import imagemMobi from "../../images/mobi.jpg"



function App() {
  return (
    <div>
        <body>
        <title>MeuCarro - O lugar ideal para encontrar seu próximo carro</title>
            <div class="topnav">
                <div>
                    <b>MeuCarro</b>
                </div> 
                <a className="login">Login</a>
            </div> 
            <p className="listTitle"><b>Lista de Carros disponíveis para venda</b></p>
            <div className="carList">
                <Carro modelo="Fiesta" marca="Ford" ano="2019" preco="24399" imagem={imagemFiesta}>
                </Carro>
                <Carro modelo="ix35" marca="Hyundai" ano="2018" preco="38899" imagem={imagemIx35}>
                </Carro>
                <Carro modelo="Corolla" marca="Toyota" ano="2015" preco="26550" imagem={imagemCorolla}>
                </Carro>
                <Carro modelo="EcoSport" marca="Ford" ano="2020" preco="89900" imagem={imagemEcoSport}>
                </Carro>
                <Carro modelo="Onix" marca="Chevrolet" ano="2018" preco="41000" imagem={imagemOnix}>
                </Carro>
                <Carro modelo="Mobi" marca="Fiat" ano="2020" preco="30000" imagem={imagemMobi}>
                </Carro>
            </div>
        </body>
    </div>
  );
}

export default App;
