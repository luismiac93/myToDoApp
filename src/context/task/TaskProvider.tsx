import {useContext, useReducer} from 'react';
import {Task} from '../../interfaces/task';
import {TaskContext} from './TaskContext';
import {taskReducer} from './taskReducer';

export interface TaskState {
  tasks: Task[];
}

const INITIAL_STATE: TaskState = {
  tasks: [],
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const TaskProvider = ({children}: Props) => {
  const [state, dispatch] = useReducer(taskReducer, INITIAL_STATE);
  const {tasks} = useContext(TaskContext);

  const createTask = (task: Task) => {
    dispatch({type: 'createTask', payload: task});
  };

  const deleteTask = (idTask: string) => {
    dispatch({type: 'deleteTask', payload: idTask});
  };

  const completedTask = (idTask: string) => {
    dispatch({type: 'markCompletedTask', payload: idTask});
  };

  return (
    <TaskContext.Provider
      value={{...state, createTask, deleteTask, completedTask}}>
      {children}
    </TaskContext.Provider>
  );
};
