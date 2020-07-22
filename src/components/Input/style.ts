import styled from 'styled-components';

export const Container = styled.div`

height:80px;
padding:16px;
box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.6);
border-radius:10px;
border: solid 2px #aaaaaa;
display:flex;
align-content:center;
background-color:transparent;
margin:0 10px;
color: #eeaa66;

form{
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
  color: #eeaa66;
  align-items:center;
::placeholder {
color: #aaaaaa;;
opacity:0.7;
}
}
`;
