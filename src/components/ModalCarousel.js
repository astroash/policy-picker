import React from 'react';
import Slider from 'react-slick';
import modals from '../data/modals.json';
import images from '../helpers/get-img';
import ModalCard from './ModalCard';

const ModalCarousel = props => {
  const settings = {
    dots: true,
    centerMode: true,
    accessibility: true,
    swipeToSlide: true,
    speed: 700
  };
  const modalCardArray = (obj, img) => {
    return Object.keys(obj).map(key => {
      const modal = obj[key];
      const imgsrc = modal.id;
      return (
        <ModalCard
          topinfo={modal.topinfo}
          bottominfo={modal.bottominfo}
          imgsrc={img[imgsrc]}
        />
      );
    });
  };
  return (
    <section>
      <Slider {...settings}>{modalCardArray(modals, images)}</Slider>
    </section>
  );
};

export default ModalCarousel;
