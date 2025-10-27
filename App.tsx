import React, { createContext, useState } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';
import { MD3DarkTheme, MD3LightTheme, Provider as PaperProvider } from 'react-native-paper';
import { useColorScheme } from 'react-native';

const customLightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#007AFF',
    brand: '#FF5733',
  },
};

const customDarkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#0A84FF',
    brand: '#FF5733',
  },
};

export const ThemeContext = createContext({
  isDark: true,
  setIsDark: (_val: boolean) => { },
});

const App = () => {
  const colorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(colorScheme === 'dark');
  const theme = isDark ? customDarkTheme : customLightTheme;

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <SafeAreaProvider>
        <PaperProvider theme={theme}>
          <AppNavigator />
        </PaperProvider>
      </SafeAreaProvider>
    </ThemeContext.Provider>
  )
}

export default App;