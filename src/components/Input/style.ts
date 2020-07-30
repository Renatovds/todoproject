import styled from 'styled-components';

export const Container = styled.div`

height:80px;
padding:16px;
box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.6);
border-radius:10px;

display:flex;
justify-content:center;
background:linear-gradient(135deg, #c3cfe2 0%, #c3cfe2 100%);
margin:20px;
color: #eeaa66;
max-width: 700px;

form {
  display:flex;
  flex:1;
}
input{
  display:flex;
  flex:1;
  width:100%;
  outline:none;
  background:transparent;
  border:0;
  font-size:20px;
  align-items:center;
::placeholder {

opacity:0.8;
}
}
`;
