import {createContext} from 'react';
import {Task} from '../../interfaces/task';

export interface TaskContextProps {
  tasks: Task[];
  createTask: (task: Task) => void;
  deleteTask: (idTask: string) => void;
  completedTask: (idTask: string) => void;
  orderBy: (idTask: string) => void;
}

export const TaskContext = createContext({} as TaskContextProps);
