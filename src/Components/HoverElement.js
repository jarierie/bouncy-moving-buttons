import React, { useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { Bounce } from "gsap/gsap-core";

const Container = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  display: flex;
  justify-content: center;
  margin: 20px;
  box-sizing: border-box;
`;

const Button = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: auto;
  background-color: ${(props) => props.color};
  pointer-events: none;
`;

const Text = styled.h1`
  font-size: 15px;
  position: absolute;
  bottom: 5px;
  margin-bottom: 0;
  text-transform: uppercase;
`;

//animation

const HoverElement = (props) => {
  const ref = useRef(null);
  const { color, position, text } = props;

  const hoverAnimation = () => {
    const tl = gsap.timeline();
    tl.to(ref.current, {
      x:
        position.x -
        ref.current.getBoundingClientRect().left -
        (ref.current.getBoundingClientRect().width / 2) * 1.3,

      y:
        position.y -
        ref.current.getBoundingClientRect().top -
        (ref.current.getBoundingClientRect().height / 2) * 1.3,
    })
      .to(
        ref.current.childNodes[0],
        {
          x:
            position.x -
            ref.current.getBoundingClientRect().left -
            ref.current.getBoundingClientRect().width / 2,

          y:
            position.y -
            ref.current.getBoundingClientRect().top -
            ref.current.getBoundingClientRect().height / 2,
        },
        0
      )
      .to(ref.current.childNodes[0], { rotate: "10deg" }, 0);
  };

  const hoverOut = () => {
    const tl = gsap.timeline();
    tl.to(ref.current, {
      x: 0,
      y: 0,
    })
      .to(ref.current.childNodes[0], { x: 0, y: 0, ease: Bounce.easeOut }, 0)

      .to(ref.current.childNodes[0], { rotate: 0 }, 0);
  };
  return (
    <>
      <Container onMouseLeave={hoverOut} onMouseMove={hoverAnimation} ref={ref}>
        <Button color={color}></Button>
        <Text>{text}</Text>
      </Container>{" "}
    </>
  );
};

export default HoverElement;
