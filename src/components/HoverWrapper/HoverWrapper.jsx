import React, { useRef } from "react";
import styled from "styled-components";

const StyledWrapper = styled.a`
  --rX: 0;
  --rY: 0;
  text-decoration: none;
  position: relative;
  z-index: 1;
  transform-style: preserve-3d;
  transform: perspective(1000px) rotateX(var(--rX)) rotateY(var(--rY));
  transition: all 250ms ease;

  &.not-focused {
    opacity: 0.4;
  }

  &::before {
    z-index: -1;
    position: absolute;
    content: "";
    top: -16px;
    left: -16px;
    right: -16px;
    bottom: -16px;
    border-radius: 8px;
  }

  &:hover {
    &::before {
      transition: all 250ms ease-in;
      background-color: rgba(255, 255, 255, 0.03);
    }

    div div {
      span {
        color: var(--chip-txt);
      }

      svg path {
        transform: translate(4px, -4px);
        stroke: var(--chip-txt);
      }
    }
  }
`;

const HoverWrapper = ({
  href,
  handleMouseEnter,
  handleMouseLeave,
  index,
  highlightedIndex,
  children,
}) => {
  const itemRef = useRef();

  const handleMouseMove = (e) => {
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    const { width, height } = itemRef.current.getBoundingClientRect();
    const halfWidth = width / 2;
    const halfHeight = height / 2;

    const sensitivity = 5;
    const maxRotation = 20;
    let rotationX = ((y - halfHeight) / halfHeight) * sensitivity;
    let rotationY = ((x - halfWidth) / halfWidth) * sensitivity;

    rotationX = Math.max(-maxRotation, Math.min(maxRotation, rotationX));
    rotationY = Math.max(-maxRotation, Math.min(maxRotation, rotationY));

    itemRef.current.style.setProperty("--rX", `${rotationX}deg`);
    itemRef.current.style.setProperty("--rY", `${rotationY}deg`);
  };

  const handleOnMouseLeave = () => {
    itemRef.current.style.setProperty("--rX", "0deg");
    itemRef.current.style.setProperty("--rY", "0deg");
    handleMouseLeave();
  };

  return (
    <StyledWrapper
      ref={itemRef}
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseMove={(e) => handleMouseMove(e)}
      onMouseLeave={(e) => handleOnMouseLeave(e)}
      href={href}
      target="_blank"
      rel="noreferrer"
      className={
        highlightedIndex !== null && highlightedIndex !== index && "not-focused"
      }
    >
      {children}
    </StyledWrapper>
  );
};

export default HoverWrapper;
