import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled(Link)`
color: #000;
  border: 1px solid #fff;
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity .3s;

&:hover, &:focus {
  opacity: 0.5;
}

`;
export default Container;
