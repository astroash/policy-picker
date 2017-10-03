import React, { Component } from 'react';
import Slider from 'react-slick';
import policies from '../data/policies';
import PolicyCard from './PolicyCard';

class PolicyCarousel extends Component {
  _policyCardArray = obj => {
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

  render() {
    let settings = {
      dots: true,
      centerMode: true,
      accessibility: true,
      swipeToSlide: true,
      speed: 700
    };

    return <Slider {...settings}>{this._policyCardArray(policies.EC)}</Slider>;
  }
}

export default PolicyCarousel;
