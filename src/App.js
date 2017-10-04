import React, { Component } from 'react';
import './css/App.css';
import PolicyCarousel from './components/PolicyCarousel';
import Home from './components/home';
class App extends Component {
  constructor() {
    super();

    this.state = {
      currentTopic: null,
      currentPolicy: null,
      currentSnippet: null,
      snippetVotes: {}
    };
  }

  render() {
    return (
      <main className="App mw6 tc center">
        <h1>Policy Picker</h1>
        <Home />
      </main>
    );
  }
}

export default App;
