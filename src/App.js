import React, { Component } from 'react';
import Form from './Component/Form/Form';
import Tableau from './Component/Tableau/Tableau';
import './App.css';
import './Component/Form/Form.css'
import './Component/Tableau/Tableau.css'

class App extends Component {
  render() {
    return (
      <div className="container-fluide App">
        <div className="App-form">
          <Form />
        </div>
        <div className="App-tableau">
          <Tableau />
        </div>
      </div>
    );
  }
}

export default App;
