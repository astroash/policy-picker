import React from 'react';
import Slider from 'react-slick';
import modals from '../data/modals.json';
import ModalCard from './ModalCard';

const ModalCarousel = props => {
  const settings = {
    dots: true,
    centerMode: true,
    accessibility: true,
    swipeToSlide: true,
    speed: 700
  };
  const modalCardArray = obj => {
    return Object.keys(obj).map(key => {
      const modal = obj[key];
      return (
        <ModalCard
          topinfo={modal.topinfo}
          bottominfo={modal.bottominfo}
          imgsrc={modal.imgsrc}
        />
      );
    });
  };
  return (
    <section>
      <Slider {...settings}>{modalCardArray(modals)}</Slider>
    </section>
  );
};

export default ModalCarousel;
