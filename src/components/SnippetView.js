import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../css/SnippetView.css';

import Swing, { Stack, Card } from 'react-swing';

class SnippetView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stack: null
    };
  }

  throwCard = () => {
    console.log('Swing.DIRECTION', Swing.DIRECTION);
    const target = this.refs.stack.refs.card2;
    const el = ReactDOM.findDOMNode(target);
    const card = this.state.stack.getCard(el);
    card.throwOut(100, 200, Swing.DIRECTION.RIGHT);
  };

  render() {
    const config = {
      minThrowOutDistance: 200,
      maxThrowOutDistance: 5000,
      allowedDirections: [Swing.DIRECTION.DOWN, Swing.DIRECTION.UP]
    };
    return (
      <div id="viewport">
        <Swing
          config={config}
          className="stack"
          tagName="div"
          setStack={stack => this.setState({ stack: stack })}
          ref="stack">
          <div
            className="card clubs"
            ref="card1"
            throwout={e => console.log('card throwout', e)}>
            ♣
          </div>
          <div className="card diamonds" ref="card2">
            ♦
          </div>
          <div className="card hearts" ref="card3">
            ♥
          </div>
          <div className="card spades" ref="card4">
            ♠
          </div>
        </Swing>
      </div>
    );
  }
}

export default SnippetView;
