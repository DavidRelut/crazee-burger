import { css, keyframes } from "styled-components";
import { theme } from ".";

export const fadeInFrontRight = keyframes`
0% {
  position: absolute,
  z-index: -1,
  opacity: 0;
  transform: translateX(100%)
}

100% {
  opacity: 1;
  transform: translateX(0)
}

`;

export const fadeInFromBottom = keyframes`
  0%{
    transform: translateY(100%);
    opacity: 0;
  }

  100%{
    transform: translateY(0%);
    opacity: 1;
  }

`;

export const basketAnimation = css`
  .basket-animation-appear {
    transform: translateX(500px);
    opacity: 0%;
  }
  .basket-animation-appear-active {
    transition: ${theme.animations.speed.quick};
    transform: translateX(0px);
    opacity: 100%;
  }

  .basket-animation-enter {
    transform: translateX(500px);
    opacity: 0%;
  }
  .basket-animation-enter-active {
    transition: ${theme.animations.speed.quick};
    transform: translateX(0px);
    opacity: 100%;
  }

  .basket-animation-exit {
    transform: translateX(0px);
    opacity: 100%;
  }

  .basket-animation-exit-active {
    transition: ${theme.animations.speed.quick};
    transform: translateX(-500px);
    opacity: 0%;
  }
`;

export const menuAnimation = css`
  /* MOUNTING */
  .menu-animation-enter {
    opacity: 0.01;
    transform: translateX(-120px);
    &.menu-animation-enter-active {
      opacity: 1;
      transform: translateX(0);
      transition: all ${theme.animations.speed.quick} ease-out;
    }
  }

  /* UNMOUNTING */
  .menu-animation-exit {
    opacity: 1;
    transform: translateY(0);
    &.menu-animation-exit-active {
      opacity: 0.01;
      transition: ${theme.animations.speed.quick} ease-out;
    }
  }
`;
