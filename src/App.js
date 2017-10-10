import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './css/App.css';
import PolicyCarousel from './components/PolicyCarousel';
import SnippetView from './components/SnippetView';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Menu from './components/Menu';
import Modal from './components/Modal';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentTopic: null,
      currentPolicy: null,
      currentSnippet: null,
      menuDisplayed: false,
      snippetVotes: {}
    };
  }

  toggleMenu = () => {
    this.setState({ menuDisplayed: !this.state.menuDisplayed });
  };

  changeTopic = topic => {
    this.setState({ currentTopic: topic });
  };

  render() {
    return (
      <Router>
        <div className="mw6 center">
          <NavBar css="nav white relative h3" toggleMenu={this.toggleMenu} />
          <Menu id="menu" css={this.state.menuDisplayed ? 'fixed' : 'dn'} />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Home changeTopic={this.changeTopic} />}
            />
            <Route
              exact
              path="/ownership"
              render={() => (
                <PolicyCarousel
                  changeTopic={this.changeTopic}
                  toggleMenu={this.toggleMenu}
                  menuDisplayed={this.state.menuDisplayed}
                />
              )}
            />
            <Route exact path="/tax" render={() => <PolicyCarousel />} />
            <Route exact path="/snippet" render={() => <SnippetView />} />
            <Route exact path="/technology" render={() => <PolicyCarousel />} />
            <Route exact path="/welfare" render={() => <PolicyCarousel />} />
            <Route exact path="/workplace" render={() => <PolicyCarousel />} />
            <Route exact path="/modal" render={() => <Modal />} />
            {/* <Route exact path='/askanon' render={() => <Dummy />} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
