import React from 'react';

const PolicyCard = props => {
  return (
    <div className="policy-card">
      <img src={props.imgsrc} alt={props.title} className="card-img" />
      <h1 className="card-title">{props.title}</h1>
      <p className="card-desc">{props.desc}</p>
    </div>
  );
};

export default PolicyCard;
