import React from 'react';
import Home from './pages/HomePage';
import LoginPage from './pages/LoginPage';

const routes = [
  { path: '/', element: <Home/>},
  { path: '/login', element: <LoginPage/>},
];


export default routes;
