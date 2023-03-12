import React from 'react';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

const routes = [
  { path: '/', element: <LoginPage />},
  { path: '/HomePage', element: <HomePage />},
];


export default routes;
