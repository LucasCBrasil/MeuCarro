import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Header() {
    return (
        <div>
            <title>MeuCarro - O lugar ideal para encontrar seu próximo carro</title>
            <div className="topnav">
                <div>
                    <button>
                        <a href="/" className="homeButton">MeuCarro</a>
                    </button>
                </div> 
            </div>
            <div className="right">
                <div>
                    <Link to={`/`}>
                        <button title="Favoritos">
                            Meus Favoritos
                        </button>
                    </Link>
                </div>
            </div>
        </div> 
    )
}

export default Header;