import React from 'react';
import Timer from './components/Timer';
import UseEffect from './components/UseEffect';
import UseState from './components/UseSate';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

const routes = [
  { path: '/', element: <HomePage />},
  { path: '/login', element: <LoginPage/>},
  { path: '/timer', element: <Timer/>},
  { path: '/contador', element: <UseState/>},
  { path: '/contador', element: <UseEffect/>} 

];


export default routes;
