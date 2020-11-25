import React from 'react';
import './App.css';

function Header() {
    return (
        <div>
            <title>MeuCarro - O lugar ideal para encontrar seu próximo carro</title>
            <div class="topnav">
                <div>
                    <button>
                        <a href="/" class="homeButton">MeuCarro</a>
                    </button>
                </div> 
            </div>
            <div class="right">
                <div>
                    <button>
                        <a href="/carro" class="carButton">Cadastrar Carro</a>
                    </button>
                </div>
            </div>
        </div> 
    )
}

export default Header;