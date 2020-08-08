import styled from 'styled-components';

export const Container = styled.div`

display:flex;
border-radius:10px;
height:70px;
justify-content:center;
padding:16px;
margin:20px;
max-width: 700px;

background:linear-gradient(135deg, #c3cfe2 0%, #c3cfe2 100%);
color: #333;


form {
  display:flex;
  flex:1;
}
input {
  display:flex;
  width:100%;
  font-size:20px;
  outline:none;
  background:transparent;
  border:0;

::placeholder {
opacity:0.8;
}
:focus{
  width:100%;

}

}



`;
