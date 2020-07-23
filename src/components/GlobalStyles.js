import { createGlobalStyle } from 'styled-components'
import Roboto from '../fonts/Roboto-Regular.ttf'

export default createGlobalStyle`
:root {
  --blue1: #2D6EC8; 
  --blue2: #82a9de;
  --blue3: #b1c9ea;
  --blue4: #e1eaf7;
  --textGrey: #434343;
  --grey2: #8B8B8B;
  --grey3: #B7B7B7;
  --grey4: #E2E2E2;
  --error: #de4644;
}

@font-face {
  font-family: 'Roboto';
  src: url(${Roboto}) format('truetype');
  font-weight: 300;
  font-style: normal;
}

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
