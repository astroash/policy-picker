import React, { Component } from 'react';
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
      <main className="App">
        <h1>Policy Picker</h1>
        <Home />
      </main>
    );
  }
}

export default App;
