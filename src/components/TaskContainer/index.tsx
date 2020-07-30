import React from 'react';
import { Container } from './style';
import Task from './Task';
import { TaskDataProps } from '../../hooks/taskData';
import TaskFilter from '../TaskFilter';

interface TaskContainerProps{
  toDos:TaskDataProps[];
}
const TaskContainer:React.FC<TaskContainerProps> = ({ toDos }) => (

  <Container>
    <TaskFilter />
    {toDos.map((element) => (
      <Task key={element.id} checked={element.checked} id={element.id} toDo={element.toDo} />
    ))}
  </Container>

);
export default TaskContainer;
