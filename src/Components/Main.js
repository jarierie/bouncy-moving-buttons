import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HoverElement from "./HoverElement";

const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  transform: rotate(-10deg);
`;

const Main = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const set = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", set);
    return () => {
      window.removeEventListener("mousemove", set);
    };
  }, []);
  return (
    <>
      <Container>
        <HoverElement
          position={position}
          text={"text1"}
          color={"red"}
        ></HoverElement>
        <HoverElement
          position={position}
          text={"text2"}
          color={"yellow"}
        ></HoverElement>
        <HoverElement
          position={position}
          text={"text3"}
          color={"green"}
        ></HoverElement>
      </Container>{" "}
    </>
  );
};

export default Main;
