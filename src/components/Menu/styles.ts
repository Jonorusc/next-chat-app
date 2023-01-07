import styled, { css, DefaultTheme } from 'styled-components'
// import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

import { Wrapper as Tooltip } from '../ToolTip/styles'
import { Wrapper as Icon } from '../Icon/styles'
import { Container } from '../Container/index'

type MenuItemProps = {
  active?: number
}

const lineAnimtation = (active: number) => {
  switch (active) {
    case 0:
      return css`
        transform: translateY(1.3rem);
      `
    case 1:
      return css`
        transform: translateY(6.5rem);
      `
    case 2:
      return css`
        transform: translateY(12.5rem);
      `
    case 3:
      return css`
        transform: translateY(17.5rem);
      `
    default:
      return css`
        transform: translateY(1.3rem);
      `
  }
}

const keyframeAnimate = (child: number) => css`
  animation-name: ${`animate_${child}`};
  animation-duration: 0.3s;
  animation-delay: 0.2s;
  animation-fill-mode: forwards;
  
  @keyframes ${`animate_${child}`} {
    30% {
      height: 0.7rem;
    }
    50% {
      height: 1.2rem;
    }
    70% {
      height: 1.5rem;
    }
    100% {
      height: 0.5rem;
      ${lineAnimtation(child)};
    }
  }
`

// line hover effect
export const Line = styled.div<MenuItemProps>`
  ${({ theme, active }) => css`
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    position: absolute;
    left: -0.8rem;
    background-color: ${theme.colours.white};
    ${lineAnimtation(active!)};
    ${keyframeAnimate(active!)};
  `}
`
// end line hover effect

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: fixed;
    background-color: transparent;
    width: 6rem;
    height: 100vh;
    padding-top: ${theme.spacings.medium};
    padding-bottom: ${theme.spacings.medium};
    border-right: 0.1rem solid ${theme.colours.white};

    ${Container} {
      position: relative;
    }

    @media screen and (max-width: 768px) {
      width: 100%;
      height: 4rem;
      background-color: ${theme.colours.primary};
      border-right: unset;
      bottom: 0;
      left: 0;
      display: flex;
      align-items: center;
    }
  `}
`

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: row;
  }
`

export const MenuItems = styled(Menu)`
  justify-content: unset;
  margin-top: 4.5rem;
  position: relative;

  ${({ theme }) => css`
    row-gap: ${theme.spacings.small};
    @media screen and (max-width: 768px) {
      column-gap: ${theme.spacings.xsmall};
      row-gap: unset;
      margin-top: unset;
      ${Tooltip} {
        border-radius: 50%;
        background-color: #404859;
        width: 3rem;
        height: 3rem;
        ${Icon} {
          display: grid;
          place-items: center;
          svg {
            width: 2rem;
          }
        }
      }
    }
  `}

  & :nth-child(1):hover ~ ${Line} {
    ${keyframeAnimate(0)};
  }
  & :nth-child(2):hover ~ ${Line} {
    ${keyframeAnimate(1)};
  }
  & :nth-child(3):hover ~ ${Line} {
    ${keyframeAnimate(2)};
  }
  & :nth-child(4):hover ~ ${Line} {
    ${keyframeAnimate(3)};
  }
`

export const MenuItem = styled.div`
  
`

export const Logo = styled.div`
  ${({ theme }) => css`
    @media screen and (max-width: 768px) {
      display: none;
    }
    position: fixed;
    bottom: ${theme.spacings.medium};
    font-size: 2rem;
    color: ${theme.colours.white};
  `}
`
