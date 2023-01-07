import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    margin-left: auto;
    margin-right: auto;
    padding-left: calc(${theme.grid.gutter} / 2);
    padding-right: calc(${theme.grid.gutter} / 2);

    /* @media screen and (max-width: 768px) {
      padding-left: calc(${theme.grid.gutter} - 2.6rem);
      padding-right: calc(${theme.grid.gutter} - 2.6rem);
    } */
  `}
`

export const FlexContainer = styled(Container)`
  display: flex;
  align-items: center;
`
