import styled from 'styled-components';

export const Header = styled.div`
position:relative;
top:0;
display:flex;
flex:1;
flex-direction:row;
max-height:80px;
min-height:80px;

justify-content:space-around;
align-items:center;
padding-bottom:15px;
padding-top:10px;

border-radius:5px;

`;
export const Hole = styled.div`
display:flex;
height:25px;
width:25px;
justify-content:center;
border:solid 1px #888;
border-radius:50px;
background-image: radial-gradient(circle, #fafafa, #333, #777);

`;
export const Wire = styled.div`
position:relative;
height:60px;
width:8px;
top:-48px ;
margin-right:1px;

border-radius:10px;
background-image: radial-gradient(circle, #ddd , #333,#000);
box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.6);
`;
