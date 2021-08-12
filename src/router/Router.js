import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer';
import NotFound from '../components/NotFound';
import NavBar from '../components/NavBar';

function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/home">
                <NavBar></NavBar>
                    <ItemListContainer greetings="iPhone 12" subtitle="Blast fast past." span="From $29.12/mo. for 24 mo. or $699 before trade-in"></ItemListContainer>
                </Route>
                <Route path="*" component={NotFound}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;