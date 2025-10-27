import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Home from '../screens/Home';
import Charts from '../screens/Charts';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Charts'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name='Home'
        component={Home}
      />
      <Stack.Screen
        name='Charts'
        component={Charts}
      />
    </Stack.Navigator>
  )
}

export default AppStack;