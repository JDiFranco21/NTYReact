import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from "./components/search";

class App extends Component {
  constructor(){
    super()
    this.state = {
      test: "test"
    }

    this.handleInputChange=this.handleInputChange.bind(this)
    this.handleInputSubmit=this.handleInputSubmit.bind(this)


  }

handleInputChange(){
}

handleInputSubmit(){
}

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}

        <Search 
        word={this.state.test}
        />

      </div>
    );
  }
}

export default App;
