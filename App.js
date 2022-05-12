/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Flow1 from './src/Flow1';
import Flow2 from './src/Flow2';
import LaunchScreen from './src/LaunchScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LaunchScreen">
        <Stack.Screen name="LaunchScreen" component={LaunchScreen} />
        <Stack.Screen name="Flow1" component={Flow1} />
        <Stack.Screen name="Flow2" component={Flow2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
