import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'
import fonts from '/styles/theme/fonts'

const GlobalStyle = createGlobalStyle`
  ${normalize}

  div {
    box-sizing: border-box;
    word-break: break-word;
  }
  a {
    text-decoration: none;
    cursor: pointer;
  }

  html {
    width: 100%;
  }
  
  body {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-touch-callout: none;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    margin: auto;
    font-family: ${fonts.sodoSans};
    width: 100%;
    max-width: 600px;
    min-height: 100vh;
    svg, img {
      display: block;
    }
  }

  #__next {
    width: inherit;
    min-height: inherit;
  }

  * {
    -webkit-tap-highlight-color: transparent;

    &:focus {
      outline: none;
    }
  }
`

export default GlobalStyle
