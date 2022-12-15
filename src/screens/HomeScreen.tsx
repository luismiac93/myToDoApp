import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../theme/appTheme';

import Icon from 'react-native-vector-icons/Ionicons';
import {FlatList} from 'react-native-gesture-handler';
import {TaskContext} from '../context';
import {TaskCard, Header} from '../components';
import {useNavigation} from '@react-navigation/core';

interface Props extends StackScreenProps<any, any> {}

export const HomeScreen = ({}: Props) => {
  const {top} = useSafeAreaInsets();
  const {tasks} = useContext(TaskContext);
  const navigation = useNavigation();

  return (
    <View style={{marginTop: top, marginHorizontal: 10, flex: 1}}>
      <Header />
      <View>
        {tasks.length > 0 ? (
          <FlatList
            data={tasks}
            keyExtractor={task => task.id}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => <TaskCard task={item} />}
          />
        ) : (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 50,
            }}>
            <Text style={styles.title}>Add to do...</Text>
          </View>
        )}
      </View>
      <TouchableOpacity
        style={styles.createTaskButton}
        onPress={() => navigation.navigate('DetailScreen')}>
        <Icon name="add-outline" color={'#19196F'} size={35} />
      </TouchableOpacity>
    </View>
  );
};
