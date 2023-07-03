import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";
import { theme } from "../../theme";

export default function CasinoEffect({ className, count }) {
  return (
    <TransitionGroup component={CasinoEffectStyled}>
      <CSSTransition classNames={"count-animated"} timeout={300} key={count}>
        <span className={className}>{count}</span>
      </CSSTransition>
    </TransitionGroup>
  );
}

const CasinoEffectStyled = styled.div`
  position: relative;
  overflow-y: hidden;
  overflow-x: hidden;

  span {
    display: inline-block;
  }

  .count-animated-enter {
    transform: translateY(100%);
  }

  .count-animated-enter-active {
    transform: translateY(0%);
    transition: ${theme.animations.speed.quick};
  }

  .count-animated-enter-done {
  }

  .count-animated-exit {
    transform: translateY(0%);
    position: absolute;
    right: 0;
    bottom: 0;
  }

  .count-animated-exit-active {
    transform: translateY(-100%);
    transition: ${theme.animations.speed.quick};
  }
`;
