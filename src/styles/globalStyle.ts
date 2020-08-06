import { createGlobalStyle } from 'styled-components';
import background from '../assets/backgroundimg.svg';

export default createGlobalStyle`
*{
  margin: 0;
  padding:0;
  box-sizing:border-box;
  outline:0;


}
body {
display:flex;
flex:1;
  background:url(${background});
  background-size: cover;

  color: #12102e;
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
