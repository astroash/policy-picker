import React from 'react';
import { Link } from 'react-router-dom';

const Form = () => {
  return (
    <form className="flex flex-column tc items-center pa2 mt3 mw6">
      <label for="age" className="b f3 mb2 mt3">How old are you?</label>
      <input className="mb3 ba pa2 br2 w-20" type="number"></input>
      <label for="election" className="b f3 mt3">Did you vote in the 2017 Election?</label>
      <div className="w-100">
        <button className="grow bg-pink di br2 pa3 ma2 white bn w-25 pointer">Yes</button>
        <button className="grow bg-pink di br2 pa3 ma2 white bn w-25 pointer">No</button>
        <button className="grow bg-pink di br2 pa3 ma2 white bn pointer">Prefer not to say</button>
      </div>
      <label for="age" className="b f3 mb2 mt3">Who did you vote for?</label>
      <input className="mb3 ba pa2 br2" type="text"></input>
      <label for="referendum" className="b f3 mt3">Did you vote in the EU referendum?</label>
      <div className="w-100">
        <button className="grow bg-pink di br2 pa3-m ph2 pv3 ma2 white bn w-30-m w-40 pointer">Yes - Remain</button>
        <button className="grow bg-pink di br2 pa3-m ph2 pv3 ma2  white bn w-30-m w-40 pointer">Yes - Leave</button>
      </div>
      <div className="w-100">
        <button className="grow bg-pink di br2 pa3 ma2 white bn w-25 pointer">No</button>
        <button className="grow bg-pink di br2 pa3 ma2 white bn pointer">Prefer not to say</button>
      </div>
      <Link to="/summary">
        <input type="button" className="grow black bg-yellow br2 pa3 ma2 mt4 bn  pointer" value="Continue to Summary"/>
      </Link>
    </form>
  );
};

export default Form;
