import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter/AppRouter';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  );
};

export default App;
