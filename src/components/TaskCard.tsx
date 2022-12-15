import React, {useContext, useState} from 'react';
import {Task} from '../interfaces/task';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {TaskContext} from '../context';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {Priority} from './Priority';

interface Props {
  task: Task;
}

export const TaskCard = ({task}: Props) => {
  const {deleteTask, completedTask} = useContext(TaskContext);
  const [checked, setChecked] = useState(task.status);

  const deleteCurrentTask = (id: string) => {
    deleteTask(id);
  };

  const completedCurrentTask = (id: string) => {
    setChecked(!checked);
    completedTask(id);
  };

  return (
    <View
      style={{
        backgroundColor: 'whitesmoke',
        borderRadius: 10,
        marginBottom: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View>
        <BouncyCheckbox
          isChecked={checked}
          text={task.task}
          textStyle={{color: '#000000', fontWeight: 'bold'}}
          disableBuiltInState
          onPress={() => completedCurrentTask(task.id)}
        />
        <Priority task={task} />
      </View>
      <TouchableOpacity onPress={() => deleteCurrentTask(task.id)}>
        <Icon name="trash-outline" color={'#19196F'} size={22} />
      </TouchableOpacity>
    </View>
  );
};
