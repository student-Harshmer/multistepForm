import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react'
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import { useAuthStore } from '../zustand/store/authStore';
import { ActivityIndicator, View } from 'react-native';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  const { user, loading, fetchUser } = useAuthStore();

  useEffect(() => {
    fetchUser(); // fetch user from AsyncStorage when app mounts
  }, [fetchUser]);

  if (loading) {
    // Show splash/loading screen while checking AsyncStorage
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {user ?
        <Stack.Screen
          name='AuthStack'
          component={AuthStack}
        /> :
        <Stack.Screen
          name='AppStack'
          component={AppStack}
        />
      }
    </Stack.Navigator>
  )
}

export default MainStackNavigator;