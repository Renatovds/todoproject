import styled from 'styled-components';
import imgBackground from '../../assets/background.png';

export const Container = styled.div`
display:flex;
height:100vh;
flex-direction:row;
justify-content:flex-start;
align-items:center;
@media (max-width: 750px) {

  flex-direction:column;
  height: 300px;
}


`;

export const Background = styled.div`
background:url(${imgBackground}) no-repeat;
background-size: cover;
height:100vh;
flex:1;


h1 {
  display:flex;
  flex:1;
  justify-content:center;
}

div{
  flex:1;
  justify-content:center;
}
`;
