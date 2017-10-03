import React, { Component } from 'react';
import Slider from 'react-slick';

class PolicyCarousel extends Component {
  render() {
    let settings = {
      dots: true,
      centerMode: true,
      accessibility: true,
      swipeToSlide: true,
      speed: 700
    };

    return (
      <Slider {...settings}>
        <div>
          <img src="http://placekitten.com/g/200/400" />
        </div>
        <div>
          <img src="http://placekitten.com/g/200/400" />
        </div>
        <div>
          <img src="http://placekitten.com/g/200/400" />
        </div>
        <div>
          <img src="http://placekitten.com/g/200/400" />
        </div>
        <div>
          <img src="http://placekitten.com/g/200/400" />
        </div>
      </Slider>
    );
  }
}

export default PolicyCarousel;
