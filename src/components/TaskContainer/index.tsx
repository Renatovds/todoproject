import React from 'react';
import { Container } from './style';
import Task from './Task';
import { TaskDataProps } from '../../hooks/taskData';
import TaskFilter from '../TaskFilter';
import HeaderNotebook from '../HeaderNotebook';
import Input from '../Input';

interface TaskContainerProps{
  toDos:TaskDataProps[];
}
const TaskContainer:React.FC<TaskContainerProps> = ({ toDos }) => (

  <Container>
    <HeaderNotebook />
    <TaskFilter />
    <Input />
    {toDos.map((element) => (
      <Task
        key={element.id}
        checked={element.checked}
        id={element.id}
        toDo={element.toDo}
        createdAt={element.createdAt}
        finishedAt={element.finishedAt}
      />
    ))}
  </Container>

);
export default TaskContainer;
