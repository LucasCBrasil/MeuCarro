import React from 'react';
import './App.css';
import Header from './Header';
import ListaCarros from '../list/ListagemCarros';

function App() {
  return (
    <div>
        <Header></Header>
        <ListaCarros></ListaCarros>
    </div>
  );
}

export default App;
