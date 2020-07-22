import React, { useState, useCallback, useEffect } from 'react';
import { FiCircle, FiCheck, FiCheckCircle } from 'react-icons/fi';
import { Container } from './style';
import { useTask, TaskDataProps } from '../../../hooks/taskData';

const Task:React.FC<TaskDataProps> = ({ toDo, checked = false, id }) => {
  const [state, setState] = useState(checked);
  const { setChecked, toDos } = useTask();
  useEffect(() => {
    const task = {
      id,
      checked: state,
      toDo,
    };

    setChecked(task);

    localStorage.setItem('@ToDos:task', JSON.stringify(toDos));
  }, [id, checked, toDo, state, setChecked, toDos]);

  const handleChecked = useCallback(() => {
    setState(!state);
  }, [state]);

  const icons = {
    circle: <FiCircle size={25} />,
    check: <FiCheckCircle size={25} />,
  };

  return (
    <Container checked={state}>
      <div>
        <button onClick={handleChecked} type="button">
          {state ? icons.check : icons.circle}
        </button>
        {state ? <span>Concluido!</span> : ''}
      </div>
      <p>{toDo}</p>
    </Container>
  );
};

export default Task;
