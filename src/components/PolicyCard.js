import React from 'react';
import '../css/PolicyCard.css';

const PolicyCard = ({ title, desc, imgsrc, ...props }) => {
  return (
    <div className="policy-card" {...props}>
      <div className="mh3 shadow-1 ba b--none br3 bg-white tc pb3 pointer">
        <div className={`policy-img ${imgsrc} br3 br--top`} alt={title} />
        <h1 className="card-title pa1">{title}</h1>
        <p className="card-desc ph3">{desc}</p>
        <p className="blue">
          <a>View breakdown</a>
        </p>
      </div>
    </div>
  );
};

export default PolicyCard;
