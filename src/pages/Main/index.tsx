import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { Container, Background } from './styles';
import TaskContainer from '../../components/TaskContainer';
import { useTask } from '../../hooks/taskData';
import NoteBook from '../../components/NoteBook';

const Main: React.FC = () => {
  const { tasks, filterTasks } = useTask();
  return (

    <Container>
      <BrowserRouter>
        <Background>
          <h1>To do List</h1>
          <NoteBook id="notebook">

            <Switch>
              <Route path="/" exact render={() => TaskContainer({ toDos: tasks })} />
              <Route path="/finished" render={() => <TaskContainer toDos={filterTasks({ type: 'finished' })} />} />
              <Route path="/unfinished" render={() => <TaskContainer toDos={filterTasks({ type: 'unfinished' })} />} />
            </Switch>

          </NoteBook>
          <footer>
            made by:
            {' '}
            <FaGithub size={40} />
          </footer>
        </Background>
      </BrowserRouter>

    </Container>
  );
};

export default Main;
