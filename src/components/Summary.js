import React from 'react';
import IconSnippet from './IconSnippet';
import policies from '../data/policies.json';

const getSnippetTitle = (voteId) => {
  const policyKeys = voteId.split('.');
  const topic = policyKeys[0];
  const policy = policyKeys[1];
  const snippet = policyKeys[2];
  return policies[topic][policy].snippets[snippet]["mini-desc"];
}

const Summary= ({snippetUpvotes, snippetDownvotes}) => {
  const upVotesList =  snippetUpvotes.map(voteId => <li>{getSnippetTitle(voteId)}</li>)
  const downVotesList =  snippetDownvotes.map(voteId => <li>{getSnippetTitle(voteId)}</li>)
  return (
    <div className="mh3">
      <h1 className="tc">Summary</h1>
      <section className="w-50 dib">
        <IconSnippet cssImg="megaphone" />
        <ul> {upVotesList} </ul>
      </section>
      <section className="w-50 dib">
        <IconSnippet cssImg="bin" />
        <ul> {downVotesList} </ul>
      </section>

    </div>
  );
};

export default Summary;
