import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './css/App.css';
import PolicyCarousel from './components/PolicyCarousel';
import Home from './components/Home';

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
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/ownership" render={() => <PolicyCarousel />} />
          <Route exact path="/tax" render={() => <PolicyCarousel />} />
          <Route exact path="/technology" render={() => <PolicyCarousel />} />
          <Route exact path="/welfare" render={() => <PolicyCarousel />} />
          <Route exact path="/workplace" render={() => <PolicyCarousel />} />
          {/* <Route exact path='/askanon' render={() => <Dummy />} /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
