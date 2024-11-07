import React from 'react';
import MovieList from './componenets/MovieList';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      

      <MovieList/>
      
      
    </div>
  );
}

export default App;