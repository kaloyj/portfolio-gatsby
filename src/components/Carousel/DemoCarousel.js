import React, { Children, cloneElement } from "react";
import CarouselContainer from "./CarouselContainer";
import Wrapper from "./Wrapper";
import CarouselSlot from "./CarouselSlot";
import Indicator from "./Indicator/Indicator";

import styled from "styled-components";

const TitleSection = styled.div`
  margin: 20px;
`;

class DemoCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0,
      direction: props.children.length === 2 ? "prev" : "next",
      sliding: false
    };
  }

  getOrder(itemIndex) {
    const { position } = this.state;
    const { children } = this.props;
    const numItems = children.length;
    if (numItems === 2) return itemIndex;
    if (itemIndex - position < 0)
      return numItems - Math.abs(itemIndex - position);
    return itemIndex - position;
  }

  nextSlide = () => {
    const { position } = this.state;
    const { children } = this.props;
    const numItems = children.length || 1;

    if (numItems === 2 && position === 1) return;

    this.doSliding("next", position === numItems - 1 ? 0 : position + 1);
  };

  prevSlide = () => {
    const { position } = this.state;
    const { children } = this.props;
    const numItems = children.length || 1;

    if (numItems === 2 && position === 0) return;

    this.doSliding("prev", position === 0 ? numItems - 1 : position - 1);
  };

  doSliding = (direction, position) => {
    this.setState({
      sliding: true,
      direction,
      position
    });
    setTimeout(() => {
      this.setState({
        sliding: false
      });
    }, 50);
  };

  render() {
    const { title, children } = this.props;
    const childrenWithProps = Children.map(children, child =>
      cloneElement(child, {
        numSlides: children.length || 1
      })
    );

    return (
      <div>
        <TitleSection>
          <h2>{title}</h2>
          <Indicator
            length={childrenWithProps.length}
            position={this.state.position}
          />
        </TitleSection>
        <Wrapper>
          <CarouselContainer
            sliding={this.state.sliding}
            direction={this.state.direction}
            numSlides={childrenWithProps.length || 1}
          >
            {childrenWithProps.map((child, index) => (
              <CarouselSlot
                key={index}
                order={this.getOrder(index)}
                numSlides={childrenWithProps.length || 1}
                position={this.state.position}
              >
                {child}
              </CarouselSlot>
            ))}
          </CarouselContainer>
        </Wrapper>
        <button onClick={() => this.prevSlide()}>Prev</button>
        <button onClick={() => this.nextSlide()}>Next</button>
      </div>
    );
  }
}

export default DemoCarousel;
