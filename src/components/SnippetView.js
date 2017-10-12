import React, { Component } from 'react';
import Snippet from './Snippet';
import policies from '../data/policies.json';
import ModalSnippet from './ModalSnippet';
import IconSnippet from './IconSnippet';
import voteTypeOf from '../helpers/convert-direction';
import { Link } from 'react-router-dom';
import '../css/SnippetView.css';

import Swing from 'react-swing';

class SnippetView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stack: null,
      megaphone: null,
      bin: null
    };
  }

  arrayOfSnippetComponents = snippets => {
    return Object.keys(snippets)
      .reverse()
      .map(key => {
        const snippet = snippets[key];
        return (
          <div key={key}>
            <Snippet
              title={snippet.title}
              desc={snippet.desc}
              id={snippet.id}
            />
          </div>
        );
      });
  };

  render() {
    const config = {
      allowedDirections: [Swing.DIRECTION.DOWN, Swing.DIRECTION.UP]
    };
    return (
      <div id="viewport">
        <ModalSnippet />
        <IconSnippet cssImg="megaphone" />
        <Swing
          config={config}
          className="stack"
          tagName="div"
          setStack={stack => this.setState({ stack: stack })}
          ref="stack"
          throwout={e => {
            e.target.remove();
            this.props.updateSnippetVote(e.target.firstChild.id, voteTypeOf(e.throwDirection));
          }}>
          {this.arrayOfSnippetComponents(policies.EC[this.props.currentPolicy].snippets)}
          <Link to='/form'>
            <button className="tc center stack-button bn br-100">Click through to your Summary</button>
          </Link>
        </Swing>
        <IconSnippet cssImg="bin" />
      </div>
    );
  }
}

export default SnippetView;
