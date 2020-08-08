import styled from 'styled-components';

export const Container = styled.div`

flex:1;
min-height:700px;
display:flex;
flex-direction:column;
padding:0 2px 10px 2px;

box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.6);
border-radius:5px;
background-color:#f5f5f5;

@media (max-width: 770px) {

  width:100vw;
  min-height:600px;


}

`;
