import React from 'react';

const ModalCard = ({ topinfo, bottominfo, imgsrc, ...props }) => {
  return (
    <div className="modal-card" {...props}>
      <h1 className="card-title f3">{topinfo}</h1>
      <img src={imgsrc} alt={topinfo} className="card-img" />
      <p className="card-desc">{bottominfo}</p>
    </div>
  );
};

export default ModalCard;
