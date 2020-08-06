import React, {
  useState, useRef, useEffect, useCallback,
} from 'react';
import { format } from 'date-fns';
import {
  FiInfo, FiXCircle, FiCheck,
} from 'react-icons/fi';
import { Container } from './style';
import { useTask, TaskDataProps } from '../../../hooks/taskData';
import ToolTip from '../../Tooltip';

const Task: React.FC<TaskDataProps> = ({
  toDo, checked = false, id, createdAt, finishedAt,
}) => {
  const [checkedState, setCheckedState] = useState(checked);
  const [stateToDo, setToDo] = useState(toDo);
  const { updateTask, tasks, removeTask } = useTask();
  const [finishDate, setFinishDate] = useState(finishedAt);

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const newDate = () => (checkedState ? new Date() : undefined);

    const task = {
      id,
      checked: checkedState,
      toDo: stateToDo,
      createdAt,
      finishedAt: newDate(),
    };
    updateTask(task);
    localStorage.setItem('@ToDos:task', JSON.stringify(tasks));
  }, [checkedState, id, tasks, updateTask, toDo, stateToDo, createdAt]);

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

  // const handleCheckButton = useCallback(() => {

  // }, [id, tasks, updateTask]);

  const icons = {

    check: <FiCheck id="checkIcon" size={30} />,
    info: <FiInfo id="infoIcon" size={20} />,

  };

  return (
    <Container checked={checkedState}>
      <div>
        <button onClick={() => setCheckedState(!checkedState)} type="button">
          {checkedState ? icons.check : ''}
        </button>
      </div>
      <div>
        {checkedState ? (
          <span id="finishedSpan">

            {finishDate}
          </span>
        ) : ''}
      </div>
      <div id="toolTip">
        <ToolTip createdAt={createdAt} title="Tarefa criada em: ">{icons.info}</ToolTip>
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
