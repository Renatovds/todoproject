import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container, Background } from './styles';
import Input from '../../components/Input';
import TaskContainer from '../../components/TaskContainer';
import TaskFilter from '../../components/TaskFilter';
import { useTask } from '../../hooks/taskData';
import NoteBook from '../../components/NoteBook';
import HeaderNotebook from '../../components/HeaderNotebook';

const Main: React.FC = () => {
  const { tasks, filterTasks } = useTask();
  return (

    <Container>
      <Background>
        <h1>To do List</h1>
        <Input />
      </Background>
      <BrowserRouter>
        <NoteBook>

          <HeaderNotebook />
          <Switch>
            <Route path="/" exact render={() => TaskContainer({ toDos: tasks })} />
            <Route path="/finished" render={() => <TaskContainer toDos={filterTasks({ type: 'finished' })} />} />
            <Route path="/unfinished" render={() => <TaskContainer toDos={filterTasks({ type: 'unfinished' })} />} />
          </Switch>

        </NoteBook>
      </BrowserRouter>

    </Container>
  );
};

export default Main;
