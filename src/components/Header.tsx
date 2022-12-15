import React, {useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {TaskContext} from '../context';
import {wereCompleted} from '../helpers';
import {styles} from '../theme/appTheme';

export const Header = () => {
  const {tasks} = useContext(TaskContext);
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          marginTop: 10,
          marginBottom: 10,
        }}>
        <Icon name="list-outline" color={'whitesmoke'} size={35} />
        <Text style={styles.title}>My ToDo App</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 10,
          marginBottom: 10,
        }}>
        <Text style={styles.subTitle}>Tasks: {tasks.length}</Text>
        <Text style={styles.subTitle}>Completed: {wereCompleted(tasks)}</Text>
      </View>
      {tasks.length > 0 && (
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            marginBottom: 10,
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity onPress={() => {}}>
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <Icon name="filter-outline" color={'whitesmoke'} size={18} />
              <Text style={styles.subTitleFilters}>By name</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View style={{flexDirection: 'row'}}>
              <Icon name="filter-outline" color={'whitesmoke'} size={18} />
              <Text style={styles.subTitleFilters}>By priority</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
