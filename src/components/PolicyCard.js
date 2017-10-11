import React from 'react';
import '../css/PolicyCard.css';

const PolicyCard = ({ title, desc, imgsrc, ...props }) => {
  return (
    <div {...props}>
      <div className="mh3 policy-card shadow-1 ba b--none br3 bg-white tc pb3 pointer">
        <div className={`policy-img ${imgsrc} br3 br--top`} alt={title} />
        <h1 className="card-title ph3">{title}</h1>
        <p className="card-desc ph2">{desc}</p>
        <p className="blue">
          <a>View breakdown</a>
        </p>
      </div>
    </div>
  );
};

export default PolicyCard;
