import React, {
  createContext, useCallback, useState, useContext, useEffect,
} from 'react';

export interface TaskDataProps{
  id:string;
toDo:string;
checked?:boolean;
}
interface TaskContextProps{
  toDos:TaskDataProps[];
  setTask(data:TaskDataProps):void;
  setChecked(data:TaskDataProps):void;

  }

const TaskContext = createContext<TaskContextProps>({}as TaskContextProps);

export const TaskData:React.FC = ({ children }) => {
  const [data, setData] = useState<TaskDataProps[]>(() => {
    const toDo = localStorage.getItem('@ToDos:task');
    if (toDo) {
      console.log(toDo);
      return (JSON.parse(toDo));
    }
    console.log('estou aki');
    return [];
  });

  useEffect(() => {
    localStorage.setItem('@ToDos:task', JSON.stringify(data));
  }, [data]);

  const setTask = useCallback((task:TaskDataProps) => {
    setData((state) => [...state, task]);
  }, []);

  const setChecked = useCallback((task:TaskDataProps) => {
    const newData = data;
    newData.forEach((element) => {
      if (element.id === task.id) { element.checked = task.checked; }
    });

    setData(() => newData);
  }, [data]);

  return (
    <TaskContext.Provider value={{ toDos: data, setTask, setChecked }}>
      {children}
    </TaskContext.Provider>
  );
};
export const useTask = ():TaskContextProps => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTask must be used within a taskProvider');
  }
  return context;
};
