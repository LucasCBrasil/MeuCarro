import React from 'react';

import { HashRouter, Switch, Route} from 'react-router-dom'; 
import ListaCarros from '../list/ListagemCarros';
import Detalhes from '../carro/Detalhes';
import CarroForm from '../carro/CarroForm';

export default () => {
    return(
        <HashRouter> 
            <Switch>
                <Route exact={true} path="/" component={ListaCarros}/>
                <Route exact={true} path="/:id" component={Detalhes} />
                <Route exact={true} path="/carro" component={CarroForm} />
            </Switch>
        </HashRouter>
    )
}
