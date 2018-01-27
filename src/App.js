import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Direction from "./components/Direction";

class App extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row App-header">
            <header className="App">
              <h1 className="App-title"><i class="fa fa-diamond" aria-hidden="true"></i>&nbsp; Crystal Collector Game &nbsp;<i class="fa fa-diamond" aria-hidden="true"></i></h1>
            </header>
          </div>
        </div>

        <Direction />
      </div>
    );
  }
}

export default App;
