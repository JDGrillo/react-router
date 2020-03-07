import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './components/Home';
import Feed from './components/Feed';
import FAQ from './components/FAQ';
import RandomButton from './components/RandomButton';

function App() {
  return (
    <BrowserRouter>
      <Header/>
        <Route exact path="/" component={ Home }/>
        <Route exact path="/feed" component={ Feed }/>
        <Route exact path="/faq" component={ FAQ }/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
