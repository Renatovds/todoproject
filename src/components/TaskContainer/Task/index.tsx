import React, {
  useState, useRef, useEffect, useCallback,
} from 'react';
import {
  FiCircle, FiXCircle, FiCheck,
} from 'react-icons/fi';
import { Container } from './style';
import { useTask, TaskDataProps } from '../../../hooks/taskData';

const Task: React.FC<TaskDataProps> = ({ toDo, checked = false, id }) => {
  const [state, setState] = useState(checked);
  const [stateToDo, setToDo] = useState(toDo);
  const { setChecked, tasks, removeTask } = useTask();
  const inputRef = useRef<HTMLInputElement>(null);
  const date = new Date();
  useEffect(() => {
    const task = {
      id,
      checked: state,
      toDo: stateToDo,
    };
    setChecked(task);
    localStorage.setItem('@ToDos:task', JSON.stringify(tasks));
  }, [state, id, tasks, setChecked, toDo, stateToDo]);

  const handleInputEdit = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.contentEditable = 'true';
      inputRef.current.readOnly = false;
    }
  }, []);

  const handleSubmitInputEdit = useCallback(() => {
    if (inputRef.current) {
      setToDo(inputRef.current?.value);
      inputRef.current.readOnly = true;
    }
  }, []);

  const icons = {
    circle: <FiCircle size={25} />,
    check: <FiCheck id="checkIcon" size={25} />,
  };

  return (
    <Container checked={state} draggable="true">
      <div>
        <button onClick={() => setState(!state)} type="button">
          {state ? icons.check : icons.circle}
        </button>
        {state ? (
          <span>
            Concluido!
            {' '}
            {date.toLocaleDateString() }
            {' '}
            {date.toLocaleTimeString() }
          </span>
        ) : ''}
      </div>
      <input
        ref={inputRef}
        onDoubleClick={handleInputEdit}
        contentEditable="false"
        readOnly
        defaultValue={stateToDo}
        onBlur={handleSubmitInputEdit}

      />

      <button onClick={() => removeTask(id)} type="button">
        <FiXCircle size={20} />
      </button>
    </Container>
  );
};

export default Task;
