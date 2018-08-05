import React, { Component } from 'react';
import { Redirect  } from 'react-router-dom';
import './style/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Redirect to="/login" push />
      </div>
    );
  }
}

export default App;
