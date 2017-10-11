import React from 'react';
import IconSnippet from './IconSnippet';
import images from '../helpers/get-img';

const Summary= () => {
  return (
    <div className="mh3">
      <h1 className="tc">Summary</h1>
      <section className="w-50 dib">
        <IconSnippet cssImg="megaphone" />
      </section>
      <section className="w-50 dib">
        <IconSnippet cssImg="bin" />
      </section>

    </div>
  );
};

export default Summary;
