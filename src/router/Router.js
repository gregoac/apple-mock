import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer';
import NotFound from '../components/NotFound';
import NavBar from '../components/NavBar';
import ItemDetailContainer from '../components/ItemDetailContainer';

function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <ItemListContainer greetings="iPhone 12" subtitle="Blast fast past." span="From $29.12/mo. for 24 mo. or $699 before trade-in"></ItemListContainer>
                    <ItemDetailContainer></ItemDetailContainer>
                </Route>
                <Route path="/category/:categoryId">
                <ItemListContainer greetings="iPhone 12" subtitle="Blast fast past." span="From $29.12/mo. for 24 mo. or $699 before trade-in"></ItemListContainer>
                </Route>
                <Route path="/item/:id">
                    <NavBar></NavBar>
                    <ItemDetailContainer></ItemDetailContainer>
                </Route>
                <Route path="*" component={NotFound}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;