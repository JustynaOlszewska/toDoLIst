import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize};
body {
  width: 100%;
  min-height: 100vh;
  font-size: 16px;
  position: relative;
};
`;

export default GlobalStyle;
