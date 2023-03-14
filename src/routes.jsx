import React from 'react';
import LoginPage from './pages/LoginPage';
import Menu from './components/menu';

const routes = [
  { path: '/', element: <Menu />},
  { path: '/Login', element: <LoginPage/>},
];


export default routes;
