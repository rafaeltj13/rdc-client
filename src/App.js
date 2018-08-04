import React, { Component } from 'react';
import logo from './logo.svg';
import './style/App.css';
import { Link } from 'react-router-dom';

import ProductList from './containers/ProductList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <Link to="/login">Ir para a página login \o/</Link>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ProductList />
      </div>
    );
  }
}

export default App;
