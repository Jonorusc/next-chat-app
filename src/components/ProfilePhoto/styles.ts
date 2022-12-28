import styled, { css, DefaultTheme } from 'styled-components'
import { ProfilePhotoProps } from '.'

type ProfileProps = Pick<ProfilePhotoProps, 'size'>

const sizeModifiers = {
  normal: () => css`
    width: 3rem;
    height: 3rem;
  `,
  large: () => css`
    width: 5.5rem;
    height: 5.5rem;
  ` 
}

export const Wrapper = styled.div`
  display: flex;
  column-gap: 1rem;
  align-items: center;
`

export const ImageBox = styled.div<ProfileProps>`
  ${({ size }) => css`
    border-radius: 50%;
    word-wrap: break-word;
    position: relative;
    overflow: hidden;
    ${sizeModifiers[size]};
    background: #f6f7f8;
    background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    );
    animation: placeholderShimmer 1s linear infinite forwards;

    @keyframes placeholderShimmer {
      0% {
        background-position: -40rem 0;
      }
      100% {
        background-position: 40rem 0;
      }
    }
  `}
`

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`

export const Title = styled.h4`
  ${({ theme }) => css`
    font-size: 2rem;
    font-weight: ${theme.font.bold};
    color: ${theme.colours.white};
  `}
`
