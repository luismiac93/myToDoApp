import {Task} from '../../interfaces/task';
import {TaskState} from './TaskProvider';

type TaskAction =
  | {type: 'createTask'; payload: Task}
  | {type: 'deleteTask'; payload: string}
  | {type: 'orderBy'; payload: string}
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
    case 'orderBy':
      if (action.payload === 'name') {
        const orderByName = state.tasks.sort((a, b) =>
          a.task > b.task ? 1 : a.task < b.task ? -1 : 0,
        );
        return {
          ...state,
          tasks: [...orderByName],
        };
      } else {
        const orderByPriority = state.tasks.sort((a, b) =>
          a.priority > b.priority ? 1 : a.priority < b.priority ? -1 : 0,
        );
        return {
          ...state,
          tasks: [...[...orderByPriority]],
        };
      }
    default:
      return state;
  }
};
