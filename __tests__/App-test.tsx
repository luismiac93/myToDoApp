/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {Header} from '../src/components/Header';
import {TaskContext} from '../src/context';
import {Priority} from '../src/components/Priority';

test('Header render correctly', () => {
  const tree = renderer
    .create(
      <TaskContext.Provider
        value={{
          tasks: [],
          completedTask: () => {},
          createTask: () => {},
          deleteTask: () => {},
          orderBy: () => {},
        }}>
        <Header />
      </TaskContext.Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Priority render correctly', () => {
  const tree = renderer
    .create(
      <Priority
        task={{id: '', priority: 0, task: 'do some test', status: false}}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
