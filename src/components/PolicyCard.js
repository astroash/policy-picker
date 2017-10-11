import React from 'react';
import {Link} from 'react-router-dom';

const PolicyCard = ({ id, title, desc, imgsrc, changePolicy, ...props }) => {
  return (
    <Link to="/snippet" onClick= {()=> changePolicy(id)} >
    <div className="policy-card" id={id} {...props}>
      <img src={imgsrc} alt={title} className="card-img" />
      <h1 className="card-title">{title}</h1>
      <p className="card-desc">{desc}</p>
    </div>
  </Link>
  );
};

export default PolicyCard;
