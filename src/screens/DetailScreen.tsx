import React, {useState} from 'react';
import {Keyboard, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {useContext} from 'react';
import {TaskContext} from '../context';
import DropDownPicker from 'react-native-dropdown-picker';
import {priorityData} from '../data/fakeData';

export const DetailScreen = () => {
  const navigation = useNavigation();
  const [taskName, setTaskName] = useState('');
  const {createTask} = useContext(TaskContext);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const createNewTask = () => {
    createTask({
      id: `${Date.now()}`,
      task: taskName,
      status: false,
      priority: value === null ? 2 : value,
    });

    Keyboard.dismiss();
    navigation.goBack();
  };

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          marginTop: 10,
          marginBottom: 10,
          marginHorizontal: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="return-up-back-outline" color={'whitesmoke'} size={35} />
        </TouchableOpacity>
        <Text style={styles.title}>Create Task</Text>
      </View>
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          marginTop: 10,
          marginBottom: 10,
          marginHorizontal: 10,
        }}>
        <TextInput
          placeholder=" Task Name"
          style={{
            backgroundColor: 'white',
            shadowColor: 'rgba(0, 0, 0, 0.2)',
            shadowOffset: {height: 0, width: 10},
            width: 250,
            padding: 5,
            borderRadius: 5,
            marginBottom: 10,
          }}
          autoCapitalize="none"
          autoCorrect={false}
          value={taskName}
          onChangeText={setTaskName}
        />
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <DropDownPicker
            placeholder="Select priority"
            style={styles.dropdownCustom}
            dropDownContainerStyle={styles.dropdownCustom}
            open={open}
            value={value}
            items={priorityData}
            setOpen={setOpen}
            setValue={setValue}
          />
        </View>
        <TouchableOpacity
          style={styles.createTaskButtonFlat}
          onPress={() => createNewTask()}>
          <Icon name="save-outline" color={'#19196F'} size={35} />
        </TouchableOpacity>
      </View>
    </>
  );
};
