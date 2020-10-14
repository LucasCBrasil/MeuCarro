import React from 'react';

import { HashRouter, Switch, Route} from 'react-router-dom'; 
import ListaCarros from '../list/ListagemCarros';

export default () => {
    return(
        <HashRouter> 
            <Switch>
                <Route exact={true} path="/" component={ListaCarros}/>
            </Switch>
        </HashRouter>
    )
}