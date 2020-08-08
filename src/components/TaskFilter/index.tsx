import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Container } from './style';
import Button from '../Button';

interface ButtonProps{
  to:string;
  label:string;
  exact?:boolean;
}

const CustomLink:React.FC<ButtonProps> = ({ to, label, exact }) => {
  const match = useRouteMatch({ path: to, exact });
  return (
    <Button as={Link} to={to} className={match ? 'active' : ''}>
      {label}
    </Button>
  );
};

const FilterTask:React.FC = () => (

  <Container>

    <CustomLink to="/" label="Todos" exact />
    <CustomLink to="/finished" label="Concluídos" />
    <CustomLink to="/unfinished" label="Pendentes" />

  </Container>
);

export default FilterTask;
