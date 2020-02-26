import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './pages/Home';
import Feed from './pages/Feed';
import FAQ from './pages/FAQ';

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
