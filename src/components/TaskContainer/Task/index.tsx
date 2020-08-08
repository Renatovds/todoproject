import React, {
  useState, useRef, useEffect, useCallback,
} from 'react';
import {
  FiInfo, FiXCircle, FiCheck,
} from 'react-icons/fi';
import { Container } from './style';
import { useTask, TaskDataProps } from '../../../hooks/taskData';
import ToolTip from '../../tooltip';

const Task: React.FC<TaskDataProps> = ({
  toDo, id, createdAt, finishedAt,
}) => {
  const [stateToDo, setToDo] = useState(toDo);
  const { updateTask, tasks, removeTask } = useTask();
  const [finishDate, setFinishDate] = useState(finishedAt);

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const task = {
      id,
      toDo: stateToDo,
      createdAt,
      finishedAt: finishDate,
    };
    updateTask(task);
    localStorage.setItem('@ToDos:task', JSON.stringify(tasks));
  }, [id, tasks, updateTask, toDo, stateToDo, createdAt, finishDate]);

  const handleInputEdit = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.contentEditable = 'true';
      inputRef.current.readOnly = false;
      inputRef.current.setAttribute('style', 'background-color:#aaa; opacity:1; outline:1;');
    }
  }, []);

  const handleSubmitInputEdit = useCallback(() => {
    if (inputRef.current) {
      setToDo(inputRef.current?.value);
      inputRef.current.readOnly = true;
      inputRef.current.setAttribute('style', 'outline:0;');
    }
  }, []);

  const icons = {

    check: <FiCheck id="checkIcon" size={30} />,
    info: <FiInfo id="infoIcon" size={20} />,

  };

  return (
    <Container checked={!!finishDate}>

      <div>
        <button onClick={() => setFinishDate(!finishDate ? new Date() : undefined)} type="button">
          {finishDate ? icons.check : ''}
        </button>
      </div>

      <div id="toolTip">
        <ToolTip createdAt={createdAt} finishedAt={finishDate} title="Tarefa criada: ">{icons.info}</ToolTip>
        <button onClick={() => removeTask(id)} type="button">
          <ToolTip title="Excluir tarefa"><FiXCircle id="closeIcon" size={20} /></ToolTip>
        </button>
      </div>
      <input
        ref={inputRef}
        onDoubleClick={handleInputEdit}
        contentEditable="false"
        readOnly
        defaultValue={stateToDo}
        onBlur={handleSubmitInputEdit}

      />

    </Container>
  );
};

export default Task;
