import styled, { css, keyframes } from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  checked: boolean;
}
// #59a36a
const checkAnimated = keyframes`

to {
  stroke-dashoffset:0;
}
from{
  stroke-dashoffset:-22;
}
`;
export const Container = styled.div<ContainerProps>`
position:relative;
flex:1;
max-height:80px;
padding:16px;
display:flex;
align-items:center;
background:transparent;
margin:0 5px;
border-bottom:1px solid #222;

transition: background-color 0.2s;


input{
  word-wrap:normal;
  font-size:20px;
  flex:1;
  margin-right:12px;
  background-color:transparent;
  outline:0;
  border:0;
  color: #222;
}

 > button{
  position:absolute;
   top:-2px;
   right:-2px;
   margin:10px 15px 10px 15px;

  width:25px;
  height:25px;
  border-radius:50%;
  border:0;
  background-color:transparent;


}




div {

  display:flex;
  align-items:center;
  padding-right: 50px;

button{
  margin:10px 15px 10px 15px;

  width:25px;
  height:25px;
  border-radius:50%;
  border:0;
  background-color:transparent;

  svg{
  position:relative ;
  color: #222;


}
}
}


${(props) => props.checked === true
    && css`
     color: #222;
        #checkIcon {
        stroke-width:2;
        stroke-dasharray:23;
        color: #59a36a;
     }
     svg {
       color: #222;
     }
     animation: ${checkAnimated} 1s linear ;
     :hover {
      background-color:${shade(0.2, '#59a36a')};

    }
     input {
       opacity:0.6;
     }`
}
${(props) => props.checked === false
    && css`
    :hover {
      background:${shade(0.2, '#413754')};
    }
     color: #af120d;
     svg {
       color: #E9e8e9;
     }`
}


`;
