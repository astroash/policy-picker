import React from 'react';
import Slider from 'react-slick';
import policies from '../data/policies.json';
import PolicyCard from './PolicyCard';

const PolicyCarousel = props => {
  const settings = {
    dots: true,
    centerMode: true,
    accessibility: true,
    swipeToSlide: true,
    speed: 700
  };
  const policyCardArray = obj => {
    return Object.keys(obj).map(key => {
      const policy = obj[key];
      return (
        <PolicyCard
          title={policy.title}
          desc={policy.desc}
          imgsrc={policy.imgsrc}
        />
      );
    });
  };
  return (
    <section>
      <Slider {...settings}>{policyCardArray(policies.EC)}</Slider>
    </section>
  );
};

export default PolicyCarousel;
