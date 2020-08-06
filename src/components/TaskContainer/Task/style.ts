import styled, { css, keyframes } from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  checked: boolean;
}

const checkAnimated = keyframes`
to {
  stroke-dashoffset:0;
}
from{
  stroke-dashoffset:-22;
}
`;

export const Container = styled.div<ContainerProps>`
  display:flex;
  align-items:center;
  position:relative;
  flex:1;
  flex-wrap:nowrap;
  max-height:70px;
  padding:16px;
  margin:0 5px;

  background:transparent;
  border-bottom:1px solid #222;

  transition: background-color 0.4s;


  input {
    border:0;
    background-color:transparent;
    color: #222;
    font-size:20px;
    flex:1;

    outline:0;
    margin-right:20px
  }



div {

  align-items:center;
  display:flex;
  padding-right: 2%;

  button {
    border-radius:3px;
    margin:10px 15px 10px 15px;
    height:25px;
    width:25px;

    background-color:transparent;
    border:solid 2px #222;

      #checkIcon{
      bottom:7px ;
      position:relative ;
      }
  }

  #finishedSpan{
    font-size:14px;
  }
}

#closeIcon {
  opacity:0;
}

 #toolTip {
  position:absolute;
  bottom:39px;
  right:-10px;
  visibility:hidden;

  div{
    padding-right:10px;
  }
button {
margin:0;
width:30px;
height:30px;
border-radius:50%;
border:0;
background-color:transparent;


}
}

@media (max-width: 770px) {
  #toolTip {
  right:0px;
}
}

${(props) => props.checked === true
    && css`

        #checkIcon {
        color: #59a36a;
        stroke-width:4;
        stroke-dasharray:23;
     }

     animation: ${checkAnimated} 1s linear ;
     :hover {
        background-color: ${shade(0.2, '#59a36a')};
        #toolTip {
        visibility:visible;
        color: #E9e8e9;
}

      #closeIcon {
        opacity:1;
       color: #222;
     }

    }
     input {
       opacity:0.7;
     }`
}
${(props) => props.checked === false
    && css`
    :hover {
      background-color: ${shade(0.2, '#cf313a')};
      #closeIcon {
        opacity:1;
       color: #222;
     }
     #toolTip {
        visibility:visible;
    }
     color: #E9e8e9;
     `
}

`;
