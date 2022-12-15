import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import {Navigation} from './src/navigation/Navigation';
import {TaskProvider} from './src/context';

export const App = () => {
  return (
    <NavigationContainer>
      <TaskProvider>
        <Navigation />
      </TaskProvider>
    </NavigationContainer>
  );
};

export default App;
