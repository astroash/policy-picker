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
    speed: 700,
    className: 'mh2 mb4'
  };
  const policyCardArray = obj => {
    return Object.keys(obj).map(key => {
      const policy = obj[key];
      return (
        <PolicyCard
          id={policy.id}
          title={policy.title}
          desc={policy.desc}
          imgsrc={policy.imgid}
          changePolicy={props.changePolicy}
        />
      );
    });
  };
  return (
    <section>
      <h1 className="f2 tc">{props.currentTopic}</h1>
      <Slider {...settings}>{policyCardArray(policies.EC)}</Slider>
    </section>
  );
};

export default PolicyCarousel;
