import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Form from '../screens/Form';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Form'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name='Form'
        component={Form}
      />
    </Stack.Navigator>
  )
}

export default AuthStack;