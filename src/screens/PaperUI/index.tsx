import { Image, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { styles } from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Card, TextInput as Inp, Snackbar, useTheme } from 'react-native-paper';
import { ThemeContext } from '../../../App';

const PaperUI = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [visible, setVisible] = useState(false);
  const theme = useTheme();
  const { isDark, setIsDark } = useContext(ThemeContext);

  return (
    <SafeAreaView style={[styles.safeAreaStyle, { backgroundColor: theme.colors.background }]}>
      <TouchableOpacity
        onPress={() => setIsDark(!isDark)}
        style={styles.toggleThemeButton}
      >
        <Image
          source={
            isDark ?
              require('../../assets/images/sun.png') :
              require('../../assets/images/moon.png')
          }
          style={[
            styles.imageStyle,
            { borderColor: theme.colors.outline }
          ]}
        />
      </TouchableOpacity>
      <View style={styles.container}>
        <Card style={styles.cardStyle}>
          <Card.Title title="React Native Paper Demo" />
          <Card.Content style={styles.inputContainer}>
            <Inp
              label="Enter your name"
              value={name}
              onChangeText={setName}
              autoCorrect={false}
              mode="outlined"
            />
            <Inp
              label="Enter your email"
              value={email}
              onChangeText={setEmail}
              autoCapitalize='none'
              autoCorrect={false}
              mode="outlined"
            />
            <Button
              mode="contained"
              buttonColor={theme.colors.primary}
              textColor={theme.colors.onPrimary}
              onPress={() => setVisible(true)}
              style={styles.buttonStyle}
            >
              Submit
            </Button>
          </Card.Content>
        </Card>
      </View>
      <Snackbar
        visible={visible}
        onDismiss={() => {
          setVisible(false);
        }}
      >
        Data submitted successfully
      </Snackbar>
    </SafeAreaView>
  )
}

export default PaperUI;