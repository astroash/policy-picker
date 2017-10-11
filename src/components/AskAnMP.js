import React from 'react';
import images from '../helpers/get-img';

const AskAnMP = () => {
  return (
    <div className="mh3">
      <h1 className="tc">Ask an MP</h1>
      <p className="tc">
        Got a question about a policy you've read? Post it here! The most
        upvoted questions will get sent to and answered by an MP every week.
      </p>
      <section className="user-questions">
        <form className="user-form flex flex-column items-center">
          <textarea className="user-input mv2 ba pa3 br2 h4 w-100" />
          <button className="grow bg-pink di br2 pv3 ma2 white bn w-90 pointer">
            Submit
          </button>
        </form>
      </section>
      <section className="questions dib">
        <p className="ba bw1 b--gold br2 bg-white pa3 w-80 mr3 dib">
          How can young people get better information on policies?
        </p>
        <img src={images.upvote} alt="upvote" className="card-img" />
        <p className="ba bw1 b--gold br2 bg-white pa3 w-80 mr3 dib">
          How do I know if a particular policy will affect me or my family?
        </p>
        <img src={images.upvote} alt="upvote" className="card-img" />
        <p className="ba bw1 b--gold br2 bg-white pa3 w-80 mr3 dib">
          What's the best news source to get latest updates on policies?
        </p>
        <img src={images.upvote} alt="upvote" className="card-img" />
        <p className="ba bw1 b--gold br2 bg-white pa3 w-80 mr3 dib">
          How can young people get better information on policies?
        </p>
        <img src={images.upvote} alt="upvote" className="card-img" />
        <p className="ba bw1 b--gold br2 bg-white pa3 w-80 mr3 dib">
          How do I know if a particular policy will affect me or my family?
        </p>
        <img src={images.upvote} alt="upvote" className="card-img" />
        <p className="ba bw1 b--gold br2 bg-white pa3 w-80 mr3 dib">
          What's the best news source to get latest updates on policies?
        </p>
        <img src={images.upvote} alt="upvote" className="card-img" />
      </section>
    </div>
  );
};

export default AskAnMP;
