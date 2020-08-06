import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { shade } from 'polished';

const Container = styled(Link)`
color: #000;
  border: 1px solid #fff;
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 2%;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity .3s;


&.active{
  border: 2px solid #555;
}
&:hover, &:focus {
  opacity: 0.5;
}

`;
export default Container;
