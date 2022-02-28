import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { Main } from './pages/Main';

export const Main = () => {
    return (

    <BrowserRouter>
    <h2>Hello to main page</h2>;
    <Route path='/' component={Main} />
        <Main />
      
    </BrowserRouter> 
    );
};