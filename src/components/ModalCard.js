import React from 'react';

const ModalCard = ({ topinfo, bottominfo, imgsrc, ...props }) => {
  return (
    <div className="modal-card" {...props}>
      <div>
        <h1 className="f3 pa3">{topinfo}</h1>
        <img src={imgsrc} alt={topinfo} className="card-img" />
        <p className="card-desc mt4">{bottominfo}</p>
      </div>
    </div>
  );
};

export default ModalCard;
