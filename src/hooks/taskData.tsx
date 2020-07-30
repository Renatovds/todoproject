import React, {
  createContext, useCallback, useState, useContext, useEffect,
} from 'react';

export interface TaskDataProps {
  id: string;
  toDo: string;
  checked?: boolean;
}
interface TaskContextProps {
  tasks: TaskDataProps[];
  setTask(data: TaskDataProps): void;
  setChecked(data: TaskDataProps): void;
  removeTask(id: string): void;
  filterTasks(type: FilterTasksTypes): TaskDataProps[];
}

export interface FilterTasksTypes {
  type: 'finished' | 'unfinished' | 'all';

}

const TaskContext = createContext<TaskContextProps>({} as TaskContextProps);

export const TaskData: React.FC = ({ children }) => {
  const [data, setData] = useState<TaskDataProps[]>(() => {
    const toDo = localStorage.getItem('@ToDos:task');
    if (toDo) {
      return (JSON.parse(toDo));
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('@ToDos:task', JSON.stringify(data));
  }, [data]);

  const setTask = useCallback((task: TaskDataProps) => {
    setData((state) => [...state, task]);
  }, []);

  const setChecked = useCallback((task: TaskDataProps) => {
    const newData = data;
    newData.forEach((element) => {
      if (element.id === task.id) {
        element.checked = task.checked;
        element.toDo = task.toDo;
      }
    });
    setData(newData);
  }, [data, setData]);

  const removeTask = useCallback((id: string) => {
    const filteredTasks = data.filter((task) => task.id !== id);
    setData(filteredTasks);
  }, [data]);

  const filterTasks = useCallback(({ type = 'all' }: FilterTasksTypes) => {
    if (type === 'finished') {
      return data.filter((task) => task.checked);
    }
    if (type === 'unfinished') {
      return data.filter((task) => !task.checked);
    }

    return data;
  }, [data]);

  return (
    <TaskContext.Provider value={{
      tasks: data, setTask, setChecked, removeTask, filterTasks,
    }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = (): TaskContextProps => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTask must be used within a taskProvider');
  }
  return context;
};
