import styled, { css } from 'styled-components';

interface ContainerProps {
  checked: boolean;
}
export const Container = styled.div<ContainerProps>`

height:80px;
padding:16px;
box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.6);
border-radius:10px;
display:flex;
align-items:center;
background-color:transparent;
margin:0 5px;


p{
  font-size:20px;
}



& + div{
  margin-top:10px;
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

}
}

}
${(props) => props.checked === true
    && css` border: solid 2px #59a36a;
     color: #59a36a;
     svg {
       color: #59a36a;
     };
     p {
       opacity:0.6;
     }`
}
${(props) => props.checked === false
    && css` border: solid 2px #af120d;
     color: #af120d;
     svg {
       color: #af120d;
     }`
}


`;
