import React from 'react';

import { HashRouter, Switch, Route} from 'react-router-dom'; 
import ListaCarros from '../components/Lista/ListagemCarros';
import Detalhes from '../components/Detalhes/Detalhes';
import Header from '../components/Header/Header';

export default () => {
    return(
        <HashRouter> 
            <Header/>
            <Switch>
                <Route exact={true} path="/" component={ListaCarros}/>
                <Route exact={true} path="/:id" component={Detalhes} />
            </Switch>
        </HashRouter>
    )
}
