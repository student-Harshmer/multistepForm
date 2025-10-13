import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import AppStack from './AppStack';
import AuthStack from './AuthStack';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='AuthStack'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name='AuthStack'
        component={AuthStack}
      />
      <Stack.Screen
        name='AppStack'
        component={AppStack}
      />
    </Stack.Navigator>
  )
}

export default MainStackNavigator;