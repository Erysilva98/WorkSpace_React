import React from 'react';
import Home from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import FormUser from './pages/FormUser';

const routes = [
    {path: '/', element: <Home/>},
    {path: '/login', element: <LoginPage/>},
    {path: '/form', element: <FormUser/>},
];


export default routes;
