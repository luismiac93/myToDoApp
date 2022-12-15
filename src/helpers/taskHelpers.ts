import {priorityData} from '../data/fakeData';
import {Task} from '../interfaces/task';

export const wereCompleted = (tasks: Task[]) => {
  return tasks.reduce((a, obj) => {
    if (obj.status) {
      return a + 1;
    }
    return a;
  }, 0);
};

export const priorityName = (value: number) => {
  const data = priorityData.filter(x => x.value === value);
  return data !== null ? data[0].label : '';
};
