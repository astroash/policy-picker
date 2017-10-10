import React from 'react';
import modal1 from '../helpers/get-img';

const ModalCard = ({ topinfo, bottominfo, imgsrc, ...props }) => {
  return (
    <div className="modal-card" {...props}>
      <img src={modal1} alt={topinfo} className="card-img" />
      <h1 className="card-title">{topinfo}</h1>
      <p className="card-desc">{bottominfo}</p>
    </div>
  );
};

export default ModalCard;
