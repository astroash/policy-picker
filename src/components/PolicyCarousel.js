import React, { Component } from 'react';
import Slider from 'react-slick';
import policies from '../data/policies';

class PolicyCarousel extends Component {
  _policyCardArray = obj => {
    Object.keys(obj).map(key => {
      const policy = obj[key];
      console.log(policy.title);
      return '';
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

    this._policyCardArray(policies.EC);

    return (
      <Slider {...settings}>
        <div>{/* <PolicyCard /> */}</div>
      </Slider>
    );
  }
}

export default PolicyCarousel;
