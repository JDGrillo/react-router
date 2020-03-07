import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Home from './components/Home';
import Ramen from './components/Ramen';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
      <Header/>
        <Route exact path="/" component={ Home }/>
        <Route exact path="/ramen" component={ Ramen }/>
        <Route exact path="/about" component={ About }/>
    </BrowserRouter>
  );
}

export default App;
