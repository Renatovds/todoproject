import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin: 0;
  padding:0;
  box-sizing:border-box;
  outline:0;


}
body {
  background:#EDEDF6;
  color: #f4ede8;
  -webkit-font-smoothing:antialiased;

}

body, input, button {
  font-family: 'Roboto Slab', serif;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight:500;
}

button {
  cursor:pointer;
}

`;
