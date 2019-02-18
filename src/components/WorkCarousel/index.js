import React from "react";
import Wrapper from "./Wrapper";
import CarouselContainer from "./CarouselContainer";
import CarouselSlot from "./CarouselSlot";
import styled from "styled-components";

const TitleSection = styled.div`
  margin: 20px;
`;

class WorkCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0,
      sliding: false,
      direction: "next"
    };
  }

  nextSlide = () => {
    const { position } = this.state;
    const { children } = this.props;
    const numItems = children.length || 1;
    this.slide("next", position === numItems - 1 ? 0 : position + 1);
  };

  prevSlide = () => {
    const { position } = this.state;
    const { children } = this.props;
    const numItems = children.length || 1;
    this.slide("prev", position === 0 ? numItems - 1 : position - 1);
  };

  slide = (direction, position) => {
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

  getOrder(itemIndex) {
    const { position } = this.state;
    const { children } = this.props;
    const numItems = children.length;
    if (itemIndex - position < 0)
      return numItems - Math.abs(itemIndex - position);
    return itemIndex - position;
  }

  render() {
    const { children } = this.props;
    const { sliding, position, direction } = this.state;
    return (
      <>
        <TitleSection>Previous Works</TitleSection>
        <Wrapper>
          <CarouselContainer sliding={sliding} direction={direction}>
            {children.map((child, index) => {
              return (
                <CarouselSlot key={index} order={this.getOrder(index)}>
                  {child}
                </CarouselSlot>
              );
            })}
          </CarouselContainer>
        </Wrapper>
        <button onClick={() => this.prevSlide()}>Prev</button>
        <button onClick={() => this.nextSlide()}>Next</button>
      </>
    );
  }
}

export default WorkCarousel;
