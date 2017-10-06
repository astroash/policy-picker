import React from 'react';

const Form = () => {
  return (
    <form class="flex flex-column tc items-center pa5 mw6">
      <label for="election" class="b f3">Did you vote in the 2017 Election?</label>
      <div>
        <button class="bg-pink di br2 pa3 ma2 white bn w-25 shadow-hover" value="Send">Yes</button>
        <button class="bg-pink di br2 pa3 ma2 white bn w-25 shadow-hover" value="Send">No</button>
        <button class="bg-pink di br2 pa3 ma2 white bn w-25 shadow-hover" value="Send">¯\_(ツ)_/¯</button>
      </div>
      <label for="referendum" class="b f3">Did you vote in the EU referendum?</label>
      <div>
        <button class="bg-pink di br2 pa3 ma2 white bn w-35 shadow-hover" value="Send">Yes - Remain</button>
        <button class="bg-pink di br2 pa3 ma2 white bn w-35 shadow-hover" value="Send">Yes - Leave</button>
        <button class="bg-pink di br2 pa3 ma2 white bn w-35 shadow-hover" value="Send">No</button>
        <button class="bg-pink di br2 pa3 ma2 white bn w-35 shadow-hover" value="Send">¯\_(ツ)_/¯</button>
      </div>
      <label for="age" class="b f3 mb2">How old are you?</label>
      <input class="mb3 pa1 ba w-20" type="number"></input>
      <input type="button" class="bg-pink br2 pa3 ma2 white bn w-20" value="Send"/>
    </form>
  );
};

export default Form;
