import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {priorityName} from '../helpers/taskHelpers';
import {Task} from '../interfaces/task';

interface Props {
  task: Task;
}

export const Priority = ({task}: Props) => {
  return (
    <View style={{marginLeft: 40, flexDirection: 'row', marginTop: 5}}>
      <Icon
        name="flag-outline"
        color={
          task.priority === 2
            ? '#19196F'
            : task.priority === 1
            ? '#D9A443'
            : '#BD1302'
        }
        size={18}
      />
      <Text style={{marginLeft: 10}}>{priorityName(task.priority)}</Text>
    </View>
  );
};
