import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './css/App.css';
import PolicyCarousel from './components/PolicyCarousel';
import SnippetView from './components/SnippetView';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Menu from './components/Menu';
import Form from './components/Form';
import AskAnMP from './components/AskAnMP';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentTopic: null,
      currentPolicy: 1,
      currentSnippet: null,
      menuDisplayed: false,
      snippetVotes: []
    };
  }

  toggleMenu = () => {
    this.setState({ menuDisplayed: !this.state.menuDisplayed });
  };

  changeTopic = topic => {
    this.setState({ currentTopic: topic });
  };

  changePolicy = policyId => {
    this.setState({ currentPolicy: policyId });
  };

  updateSnippetVote = newVoteObj => {
    this.setState({ snippetVotes: this.state.snippetVotes.concat(newVoteObj) });
  };

  render() {
    return (
      <Router>
        <div className="mw6 center app">
          <NavBar
            css="nav white relative h3 mw6"
            toggleMenu={this.toggleMenu}
          />
          <Menu id="menu" changeTopic={this.changeTopic} toggleMenu={this.toggleMenu} cssImg={this.state.menuDisplayed ? 'fixed' : 'dn'} />
          <main className="main">
            <Switch>
              <Route exact path="/" render={() => <Home changeTopic={this.changeTopic} />} />
              <Route exact path="/ownership" render={() => ( <PolicyCarousel changePolicy={this.changePolicy} /> )} />
              <Route exact path="/tax" render={() => <PolicyCarousel changePolicy={this.changePolicy} />} />
              <Route exact path="/technology" render={() => <PolicyCarousel changePolicy={this.changePolicy} />} />
              <Route exact path="/welfare" render={() => <PolicyCarousel changePolicy={this.changePolicy} />} />
              <Route exact path="/workplace" render={() => <PolicyCarousel changePolicy={this.changePolicy} />} />
              <Route exact path="/form" render={() => <Form />} />
              <Route exact path="/summary" />
              <Route exact path="/ask" render={() => <AskAnMP />} />
              <Route exact path="/snippet" render={() => (
              <SnippetView currentPolicy={this.state.currentPolicy} updateSnippetVote={this.updateSnippetVote} /> )} />

              {/* <Route exact path='/askanon' render={() => <Dummy />} /> */}
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
