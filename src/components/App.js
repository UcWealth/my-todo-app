import React, { Component } from 'react';
import './App.css';
import Form from './form'

class App extends Component {

  render(){
    return (
      <div className="App">
        <div className="todo-container">
          <Form />
        </div>
      </div>
    )
  }

}


export default App;
