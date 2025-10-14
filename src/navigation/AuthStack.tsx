import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Form from '../screens/Form';
import Webscreen from '../screens/Webscreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Form'
    >
      <Stack.Screen
        name='Form'
        component={Form}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='Webscreen'
        component={Webscreen}
      />
    </Stack.Navigator>
  )
}

export default AuthStack;