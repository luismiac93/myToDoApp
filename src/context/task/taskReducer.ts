import {Task} from '../../interfaces/task';
import {TaskState} from './TaskProvider';

type TaskAction =
  | {type: 'createTask'; payload: Task}
  | {type: 'deleteTask'; payload: string}
  | {type: 'markCompletedTask'; payload: string};

export const taskReducer = (
  state: TaskState,
  action: TaskAction,
): TaskState => {
  switch (action.type) {
    case 'createTask':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case 'deleteTask':
      return {
        ...state,
        tasks: state.tasks.filter(x => x.id != action.payload),
      };
    case 'markCompletedTask':
      return {
        ...state,
        tasks: state.tasks.map(x =>
          x.id === action.payload ? {...x, status: !x.status} : x,
        ),
      };

    default:
      return state;
  }
};
