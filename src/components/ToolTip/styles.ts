import styled, { css, DefaultTheme } from 'styled-components'
import { TooltipProps } from '.'

export type TooltipStyleProps = Pick<TooltipProps, 'direction'>

const TooltipModifiers = {
  top: (theme: DefaultTheme) => css`
    &::before {
      bottom: calc(100% + 5px + 1px);
      left: 30%;
      transform: translateX(-50%);
    }

    &::after {
      bottom: calc(100% + 1px);
      left: 50%;
      transform: translateX(-50%);
      border-bottom-width: 0;
      border-top-color: ${theme.colours.darkGray};
    }
  `,
  bottom: (theme: DefaultTheme) => css`
    &::before {
      top: calc(100% + 5px + 1px);
      left: 30%;
      transform: translateX(-50%);
    }

    &::after {
      top: calc(100% + 1px);
      left: 50%;
      transform: translateX(-50%);
      border-top-width: 0;
      border-bottom-color: ${theme.colours.darkGray};
    }
  `,
  right: (theme: DefaultTheme) => css`
    &::before {
      left: calc(100% + 5px + 1px);
      /* top: 50%; */
      transform: translateY(-50%);
    }

    &::after {
      left: calc(100% + 1px);
      top: 50%;
      transform: translateY(-50%);
      border-left-width: 0;
      border-right-color: ${theme.colours.darkGray};
    }
  `,
  left: (theme: DefaultTheme) => css`
    &::before {
      right: calc(100% + 5px + 1px);
      /* top: 50%; */
      transform: translateY(-50%);
    }

    &::after {
      right: calc(100% + 1px);
      top: 50%;
      transform: translateY(-50%);
      border-right-width: 0;
      border-left-color: ${theme.colours.darkGray};
    }
  `
}

const AfterModifers = {
  top: () => css`
    animation-name: slideInDown;
    animation-duration: 0.2s;
    animation-delay: 0.5s;
    animation-fill-mode: both;
  `,
  bottom: () => css`
    animation-name: slideInUp;
    animation-duration: 0.2s;
    animation-delay: 0.5s;
    animation-fill-mode: both;
  `,
  left: () => css`
    animation-name: slideInLeft;
    animation-duration: 0.2s;
    animation-delay: 0.5s;
    animation-fill-mode: both;
  `,
  right: () => css`
    animation-name: slideInRight;
    animation-duration: 0.2s;
    animation-delay: 0.5s;
    animation-fill-mode: both;
  `
}

export const Wrapper = styled.div<TooltipStyleProps>`
  ${({ theme, direction }) => css`
    position: relative;
    cursor: pointer;
    width: fit-content;
    height: fit-content;

    &::before {
      position: absolute;
      visibility: hidden;
      content: attr(value);
      background-color: ${theme.colours.darkGray};
      color: ${theme.colours.white};
      padding: 0.4rem;
      border-radius: 4px;
      white-space: nowrap;
    }

    &::after {
      visibility: hidden;
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      border: 5px solid transparent;
    }

    &:hover {
      &::before {
        visibility: visible;
        animation-name: bounceIn;
        animation-duration: 0.5s;
        animation-fill-mode: both;
      }
      &::after {
        ${!!direction && AfterModifers[direction!]}
      }
    }

    ${!!direction && TooltipModifiers[direction!](theme)};

    @keyframes bounceIn {
      0%,
      20%,
      40%,
      60%,
      80%,
      100% {
        transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      }
      0% {
        opacity: 0;
        transform: scale3d(0.3, 0.3, 0.3);
      }
      20% {
        transform: scale3d(1.1, 1.1, 1.1);
      }
      40% {
        transform: scale3d(0.9, 0.9, 0.9);
      }
      60% {
        opacity: 1;
        transform: scale3d(1.03, 1.03, 1.03);
      }
      80% {
        transform: scale3d(0.97, 0.97, 0.97);
      }
      100% {
        opacity: 1;
        transform: scale3d(1, 1, 1);
      }
    }

    @keyframes slideInRight {
      0% {
        transform: translateX(100%);
      }
      100% {
        visibility: visible;
        transform: translateX(0);
      }
    }

    @keyframes slideInDown {
      0% {
        transform: translateY(-100%);
      }
      100% {
        visibility: visible;
        transform: translateY(0);
      }
    }
    @keyframes slideInLeft {
      0% {
        transform: translateX(-100%);
      }
      100% {
        visibility: visible;
        transform: translateX(0);
      }
    }
    @keyframes slideInUp {
      0% {
        transform: translateY(100%);
      }
      100% {
        visibility: visible;
        transform: translateY(0);
      }
    }
  `}
`
