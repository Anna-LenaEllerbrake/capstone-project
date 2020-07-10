import { createGlobalStyle } from 'styled-components'
import Roboto from '../fonts/Roboto-Regular.ttf'

export default createGlobalStyle`
:root {
  --primaryBlue: #2D6EC8; 
  --secondaryBlue: #82a9de;
  --tertiaryBlue: #b1c9ea;
  --quaternaryBlue: #e1eaf7;
  --textGrey: #434343;
}

@font-face {
  font-family: 'Roboto';
  src: url(${Roboto}) format('truetype');
  font-weight: 300;
  font-style: normal;

 * {

    box-sizing: border-box;
    
    }
    
    body {

        width: 100vw;
        height: 100vh;
        margin: 0;
        font-family: 'Roboto', sans-serif;
        color: var(--textGrey);
        font-weight: normal;
      }
`
