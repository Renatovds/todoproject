import styled from 'styled-components';

export const Container = styled.div`
display:flex;
flex:1;
height:100vh;
width:100vw;
flex-direction:row;
justify-content:center;

@media (max-width: 770px) {

width:100vw;
flex-direction:column;

h1{
  padding-top:25px;
}
#notebook{
  width:100vw;
  justify-content:center;

    div{
      max-width:95vw;
    }
}
footer {
  position:absolute;
  right:10px;
  top: 10px;
  height:8px;
  font-size:12px;

  svg{
    max-inline-size:20px;
  }
}
}


`;

export const Background = styled.div`
display:flex;
flex-direction:column;
width:100vw;
margin-top:20px;
padding:5px;
justify-content:center;
align-items:center;

h1 {
  margin:5px;
  padding-bottom:10px;
  display:flex;
  flex:1;
  justify-content:center;
  color: #f6f6f6;
}

footer {
  position:absolute;
  right:20px;
  top: 10px;


}


`;
