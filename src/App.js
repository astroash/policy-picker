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
import Summary from './components/Summary';
import lowerCaseNoSpace from './helpers/lowercase-no-spacing';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentTopic: 'Home',
      currentPolicy: 1,
      currentSnippet: null,
      menuDisplayed: false,
      snippetUpvotes: ["EC.1.1", "EC.1.3", "EC.1.4"],
      snippetDownvotes: ["EC.1.2"]
    };
  }

  toggleMenu = () => {
    this.setState({ menuDisplayed: !this.state.menuDisplayed });
  };

  changeTopic = topic => {
    this.setState({ currentTopic: topic });
    console.log('this.props.location: ', this.props.location);
  };

  changePolicy = policyId => {
    this.setState({ currentPolicy: policyId });
  };

  updateSnippetVote = (id, vote) => {
    console.log(id, vote);
    if (vote === '+1'){
      this.setState({ snippetUpvotes: this.state.snippetUpvotes.concat(id) });
    } else {
      this.setState({ snippetDownvotes: this.state.snippetDownvotes.concat(id) });
    }
  };

  render() {
    return (
      <Router>
        <div className="mw6 center app">
          <NavBar
            css={`nav white relative h3 mw6`}
            currentIcon={`current-${lowerCaseNoSpace(this.state.currentTopic)}`}
            toggleMenu={this.toggleMenu}
          />
          <Menu id="menu" cssImg={this.state.menuDisplayed ? 'fixed' : 'dn'} />
          <main className="main">
            <Switch>
              <Route exact path="/" render={() => <Home changeTopic={this.changeTopic} />} />
              <Route exact path="/ownership" render={() => (
                  <PolicyCarousel currentTopic={this.state.currentTopic} changePolicy={this.changePolicy} />)} />
              <Route exact path="/tax" render={() => (
                  <PolicyCarousel currentTopic={this.state.currentTopic}
                  changePolicy={this.changePolicy} /> )} />
              <Route exact path="/technology" render={() => (
                  <PolicyCarousel currentTopic={this.state.currentTopic}
                  changePolicy={this.changePolicy} /> )} />
              <Route exact path="/welfare" render={() => (
                  <PolicyCarousel
                    currentTopic={this.state.currentTopic}
                    changePolicy={this.changePolicy} /> )} />
              <Route exact path="/workplace" render={() => (
                  <PolicyCarousel currentTopic={this.state.currentTopic}
                    changePolicy={this.changePolicy} /> )} />
              <Route exact path="/form" render={() => <Form />} />
              <Route exact path="/summary" render={() => <Summary snippetUpvotes={this.state.snippetUpvotes} snippetDownvotes={this.state.snippetDownvotes}/>}/>
              <Route exact path="/ask" render={() => <AskAnMP />} />
              {/* <Route exact path='/askanon' render={() => <Dummy />} /> */}
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
