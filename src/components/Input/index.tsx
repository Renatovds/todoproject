import React, { useCallback } from 'react';
import { Form } from 'unform';
import { v4 } from 'uuid';
import { Container } from './style';
import { useTask } from '../../hooks/taskData';

const Input:React.FC = () => {
  const { setTask } = useTask();
  const inputRef = React.useRef<HTMLInputElement>(null);
  const HandleSubmit = useCallback(() => {
    if (inputRef && inputRef.current?.value) {
      const task = {
        id: v4(),
        toDo: inputRef.current.value,

      };
      setTask(task);
      inputRef.current.value = '';
    }
  }, [setTask]);
  return (
    <Container>
      <Form onSubmit={HandleSubmit}>

        <input ref={inputRef} placeholder="Digite a tarefa..." />
      </Form>

    </Container>
  );
};
export default Input;
