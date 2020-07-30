import React, { useState } from 'react';
import { Container } from './style';
import Button from '../Button';

const FilterTask:React.FC = () => (
  <Container>
    <Button to="/"> Todos </Button>
    <Button to="/finished"> Concluido </Button>
    <Button to="unfinished"> Pendente </Button>

  </Container>
);

export default FilterTask;
