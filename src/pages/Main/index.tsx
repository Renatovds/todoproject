import React from 'react';
import { Container } from './styles';
import Input from '../../components/Input';
import Content from '../../components/Content';
import TaskContainer from '../../components/TaskContainer';
import { useTask } from '../../hooks/taskData';

const Main: React.FC = () => {
  const { toDos } = useTask();
  return (

    <Container>
      <h1>To do List</h1>

      <Content>
        <Input />

      </Content>
      <TaskContainer toDos={toDos} />

    </Container>
  );
};

export default Main;
