import React, {
  createContext, useCallback, useState, useContext, useEffect,
} from 'react';

export interface TaskDataProps {
  id: string;
  toDo: string;
  createdAt:Date;
  finishedAt?:Date;
}

interface TaskContextProps {
  tasks: TaskDataProps[];
  setTask(data: TaskDataProps): void;
  updateTask(data: TaskDataProps): void;
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

  const updateTask = useCallback((task: Omit<TaskDataProps, 'createdAt'>) => {
    const taskData = data;
    taskData.forEach((element) => {
      if (element.id === task.id) {
        element.toDo = task.toDo;
        element.finishedAt = task.finishedAt;
      }
    });
    setData(taskData);
  }, [data, setData]);

  const removeTask = useCallback((id: string) => {
    const filteredTasks = data.filter((task) => task.id !== id);
    setData(filteredTasks);
  }, [data]);

  const filterTasks = useCallback(({ type = 'all' }: FilterTasksTypes) => {
    if (type === 'finished') {
      return data.filter((task) => task.finishedAt);
    }
    if (type === 'unfinished') {
      return data.filter((task) => !task.finishedAt);
    }

    return data;
  }, [data]);

  return (
    <TaskContext.Provider value={{
      tasks: data, setTask, updateTask, removeTask, filterTasks,
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
