import { createGlobalStyle, css } from "styled-components"

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local(''),
        url('../fonts/poppins-v20-latin-300.woff2') format('woff2'), 
  }
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''),
        url('../fonts/poppins-v20-latin-regular.woff2') format('woff2')
  }
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local(''),
        url('../fonts/poppins-v20-latin-600.woff2') format('woff2'), 
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
    }

    /* Animations */
    .toolTip {
      position: relative;
      border-bottom: 1px dashed darkgray;
      cursor: pointer;
    }

    .toolTip:before {
      visibility: hidden;
      content: attr(title);
      background-color: ${theme.colours.darkGray};
      color: #f3f3f3;
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      position: absolute;
      white-space: nowrap;
      /* opacity: 0.7; */
    }

    .toolTip:after {
      visibility: hidden;
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      border: 5px solid transparent;
    }

    .toolTip.top:before {
      bottom: calc(100% + 5px + 1px);
      left: 50%;
      -webkit-transform: translateX(-50%);
              transform: translateX(-50%);
    }

    .toolTip.top:after {
      bottom: calc(100% + 1px);
      left: 50%;
      -webkit-transform: translateX(-50%);
              transform: translateX(-50%);
      border-bottom-width: 0;
      border-top-color: ${theme.colours.darkGray};
    }

    .toolTip:hover:before,
    .toolTip:hover:after {
      visibility: visible;
    }

    .toolTip.bottom:before {
      top: calc(100% + 5px + 1px);
      left: 50%;
      -webkit-transform: translateX(-50%);
              transform: translateX(-50%);
    }

    .toolTip.bottom:after {
      top: calc(100% + 1px);
      left: 50%;
      -webkit-transform: translateX(-50%);
              transform: translateX(-50%);
      border-top-width: 0;
      border-bottom-color: ${theme.colours.darkGray};
    }

    .toolTip[data-position="left"]:before {
      right: calc(100% + 5px + 1px);
      top: 50%;
      -webkit-transform: translateY(-50%);
              transform: translateY(-50%);
    }

    .toolTip[data-position="left"]:after {
      right: calc(100% + 1px);
      top: 50%;
      -webkit-transform: translateY(-50%);
              transform: translateY(-50%);
      border-right-width: 0;
      border-left-color: ${theme.colours.darkGray};
    }

    .toolTip.right:before {
      left: calc(100% + 5px + 1px);
      top: 50%;
      -webkit-transform: translateY(-50%);
              transform: translateY(-50%);
    }

    .toolTip.right:after {
      left: calc(100% + 1px);
      top: 50%;
      -webkit-transform: translateY(-50%);
              transform: translateY(-50%);
      border-left-width: 0;
      border-right-color: ${theme.colours.darkGray};
    }
  `}  
`

export default GlobalStyle