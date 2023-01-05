import styled, { css, DefaultTheme } from 'styled-components'
import { IconProps } from '.'

export type StyleProps = Pick<IconProps, 'badge' | 'color'>

export const Wrapper = styled.div<StyleProps>`
  ${({ theme, badge, color }) => css`
    width: 3rem;
    height: 3rem;
    position: relative;

    &:first-child {
      ${color && css`
        color: ${theme.colours[color!]};
      `}
    }

    ${badge && css`
      &::after {
        content: '';
        position: absolute;
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        top: 0;
        right: -0.1rem;
        background-color: ${theme.colours.secondary};
      }
    `}
  `}
`
