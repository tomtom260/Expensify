import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import CreateExpensePage from '../components/CreateExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = ()=>(
    <BrowserRouter>
        <Header/>
        <Switch>
            <Route path='/edit/:id' component ={EditExpensePage}/>
            <Route path='/create' component ={CreateExpensePage}/>
            <Route exact path='/' component ={ExpenseDashboardPage}/>
            <Route component ={NotFoundPage}/>
        </Switch>
    </BrowserRouter>
)

export default AppRouter;