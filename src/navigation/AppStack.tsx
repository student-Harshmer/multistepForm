import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Home from '../screens/Home';
import PaperUI from '../screens/PaperUI';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={Home}
      />
      <Stack.Screen
        name='PaperUI'
        component={PaperUI}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}

export default AppStack;