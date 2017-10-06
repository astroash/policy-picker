import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../css/SnippetView.css';

import Swing, { Stack, Card, Direction } from 'react-swing';

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
    return (
      <div>
        <div id="viewport">
          <Swing
            className="stack"
            tagName="div"
            setStack={stack => this.setState({ stack: stack })}
            ref="stack"
            throwout={e => console.log('throwout', e)}>
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
      </div>
    );
  }
}

export default SnippetView;
