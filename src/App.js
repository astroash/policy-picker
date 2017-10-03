import React, { Component } from 'react';
import './css/App.css';
import PolicyCarousel from './components/PolicyCarousel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Policy Picker</h1>
        </header>
        <PolicyCarousel />
      </div>
    );
  }
}

export default App;
