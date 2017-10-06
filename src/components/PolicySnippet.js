import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Swing, { Stack, Card, Direction } from 'react-swing';

class PolicySnippet extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      stack: null
    };
  }

  // throwOut Method
  throwCard = () => {
    // Swing Card Directions
    console.log('Swing.DIRECTION', Swing.DIRECTION);

    // Swing Component Childrens refs
    const target = this.refs.stack.refs.card2;

    // get Target Dom Element
    const el = ReactDOM.findDOMNode(target);

    // stack.getCard
    const card = this.state.stack.getCard(el);

    // throwOut method call
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
        <div className="control">
          <button type="button" onClick={this.throwCard}>
            throw Card
          </button>
        </div>
      </div>
    );
  }
}

export default PolicySnippet;
