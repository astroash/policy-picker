import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './css/App.css';
import PolicyCarousel from './components/PolicyCarousel';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Menu from './components/Menu';
class App extends Component {
  constructor() {
    super();

    this.state = {
      currentTopic: 'Home',
      currentPolicy: null,
      currentSnippet: null,
      menuDisplayed: false,
      snippetVotes: {}
    };
  }

  toggleMenu = () => {
    this.setState({ menuDisplayed: !this.state.menuDisplayed });
  }
  changeTopic = topic => {
    this.setState({ currentTopic: topic });
  }

  render() {
    return (
      <div className="mw6 center">
        <NavBar css="nav white relative h3" toggleMenu={this.toggleMenu} />
        <Menu id="menu" css={this.state.menuDisplayed ? 'fixed' : 'dn'}
          changeTopic={this.changeTopic} toggleMenu={this.toggleMenu}/>
        <Switch>
          <Route exact path="/"
            render={() => <Home changeTopic={this.changeTopic} />} />
          <Route exact path="/ownership" render={() => ( <PolicyCarousel
                changeTopic={this.changeTopic}
                toggleMenu={this.toggleMenu}
                menuDisplayed={this.state.menuDisplayed} />)} />
          <Route exact path="/tax" render={() => <PolicyCarousel />} />
          <Route exact path="/technology" render={() => <PolicyCarousel />} />
          <Route exact path="/welfare" render={() => <PolicyCarousel />} />
          <Route exact path="/workplace" render={() => <PolicyCarousel />} />
          {/* <Route exact path='/askanon' render={() => <Dummy />} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
