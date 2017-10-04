import React from 'react';
import Slider from 'react-slick';
import policies from '../data/policies';
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
        <div>
          <PolicyCard
            title={policy.title}
            desc={policy.desc}
            imgsrc={policy.imgsrc}
          />
        </div>
      );
    });
  };
  return <Slider {...settings}>{policyCardArray(policies.EC)}</Slider>;
};

export default PolicyCarousel;
