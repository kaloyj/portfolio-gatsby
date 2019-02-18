import React, { Component, Children, cloneElement } from "react";

import Carousel from "../components/Carousel/DemoCarousel";
import CarouselItem from "../components/Carousel/CarouselItem";

export default class CarouselPage extends Component {
  render() {
    return (
      <div>
        <Carousel title="Carousel">
          <CarouselItem index={1} />
          <CarouselItem index={2} />
          <CarouselItem index={3} />
          <CarouselItem index={4} />
          <CarouselItem index={5} />
        </Carousel>
      </div>
    );
  }
}
