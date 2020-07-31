import styled from 'styled-components';

export const Header = styled.div`
display:flex;
flex:1;
flex-direction:row;
height: 80px;
justify-content:space-around;
align-items:center;
padding-bottom:10px;
border-right:solid 3px #000;
border-left:solid 3px #000;
border-top:solid 3px #000;
border-radius:5px;

`;
export const Hole = styled.div`
display:flex;
height:25px;
width:25px;
justify-content:center;
border:solid 3px #000;
border-radius:50px;

`;
export const Wire = styled.div`
position:relative;
height:50px;
width:10px;
top:-35px ;
border:solid 3px #000;
border-radius:10px;
background-color:#fff;
`;
