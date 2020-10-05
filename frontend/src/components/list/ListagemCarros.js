import React from 'react';
import Carro from '../carro/Carro.js';
import imagemFiesta from "../../images/fiesta.jpg";
import imagemIx35 from "../../images/ix35.png";
import imagemCorolla from "../../images/corolla.JPG";
import imagemEcoSport from "../../images/ecosport.jpg";
import imagemOnix from "../../images/onix.jpg";
import imagemMobi from "../../images/mobi.jpg";

function ListaCarros() {
    return (
        <div>
            <p className="listTitle"><b>Lista de Carros disponíveis para venda</b></p>
            <div className="carList">
                <Carro modelo="Fiesta" marca="Ford" ano="2019" preco="24399" imagem={imagemFiesta} emplacamento="25/11/2020" cambio="Manual" vidros="Dianteiros elétricos, traseiros manuais" 
                tecido_bancos="Malharia" computador_bordo="Não">
                </Carro>
                <Carro modelo="ix35" marca="Hyundai" ano="2018" preco="38899" imagem={imagemIx35} emplacamento="06/06/2021" cambio="Automático" vidros="Elétricos" 
                tecido_bancos="Couro" computador_bordo="Sim">
                </Carro>
                <Carro modelo="Corolla" marca="Toyota" ano="2015" preco="26550" imagem={imagemCorolla} emplacamento="13/02/2021" cambio="Automático" vidros="Elétricos" 
                tecido_bancos="Couro" computador_bordo="Sim">
                </Carro>
                <Carro modelo="EcoSport" marca="Ford" ano="2020" preco="89900" imagem={imagemEcoSport} emplacamento="09/12/2020" cambio="Automático" vidros="Dianteiros elétricos, traseiros manuais" 
                tecido_bancos="Malharia" computador_bordo="Não">
                </Carro>
                <Carro modelo="Onix" marca="Chevrolet" ano="2018" preco="41000" imagem={imagemOnix} emplacamento="21/10/2020" cambio="Manual" vidros="Dianteiros elétricos, traseiros manuais" 
                tecido_bancos="Malharia" computador_bordo="Não">
                </Carro>
                <Carro modelo="Mobi" marca="Fiat" ano="2020" preco="30000" imagem={imagemMobi} emplacamento="18/02/2021" cambio="Manual" vidros="Manuais" 
                tecido_bancos="Malharia" computador_bordo="Não">
                </Carro>
            </div>
        </div>
    )
}

export default ListaCarros;