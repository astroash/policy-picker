import React from 'react';
import IconSnippet from './IconSnippet';
import policies from '../data/policies.json';

const getSnippetTitle = (json, voteId) => {
  const [topic, policy, snippet ] = voteId.split('.');
  return json[topic][policy].snippets[snippet]["mini-desc"];
}

const Summary= ({snippetUpvotes, snippetDownvotes}) => {
  const upVotesList =  snippetUpvotes.map(voteId => <li>{getSnippetTitle(policies, voteId)}</li>)
  const downVotesList =  snippetDownvotes.map(voteId => <li>{getSnippetTitle(policies, voteId)}</li>)
  return (
    <div className="mh3">
      <h1 className="tc ma0 mb3">Summary</h1>
      <section className="w-50 dib v-top">
        <IconSnippet cssImg="megaphone" />
        <ul className="list pa0 tc summary__ul"> {upVotesList} </ul>
      </section>
      <section className="w-50 dib v-top">
        <IconSnippet cssImg="bin" />
        <ul className="list pa0 tc summary__ul"> {downVotesList} </ul>
      </section>
      <section className="ba bw1 b--gold br2 bg-white mr3 dib pa2 w-100">
        <h3 className="ma2">What's next</h3>
          <a href="#" className="db ma2">Link to cool meetup</a>
          <a href="#" className="db ma2">Link to awesome grassroots movement</a>
          <a href="#" className="db ma2">Link to volunteering opportunities</a>
      </section>
    </div>
  );
};

export default Summary;
