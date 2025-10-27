/* eslint-disable react/no-unstable-nested-components */
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const [inp, setInp] = useState<string>('');
  const inputRef = useRef<TextInput>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const navigation = useNavigation<any>();

  const toggleFocus = () => {
    inputRef.current?.isFocused() ?
      inputRef.current?.blur() :
      inputRef.current?.focus()
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () =>
        <TouchableOpacity onPress={() => navigation.navigate('PaperUI')}>
          <Text>PaperUI</Text>
        </TouchableOpacity>
    })

  }, [navigation]);

  return (
    <SafeAreaView style={styles.safeAreaStyle} edges={['left', 'right']}>
      <View style={styles.container}>
        <Text style={styles.headerText}>This is the Home screen</Text>
        <TextInput
          placeholder='Enter something...'
          ref={inputRef}
          autoCapitalize='none'
          autoCorrect={false}
          value={inp}
          onChangeText={setInp}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={[
            styles.inputStyle,
            isFocused ?
              styles.focusedInput :
              undefined
          ]}
        />
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            onPress={toggleFocus}
            style={styles.buttonStyle}
          >
            <Text style={styles.buttonText}>
              Tap to toggle focus
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => inputRef.current?.clear()}
            style={[styles.buttonStyle, styles.clearButton]}
          >
            <Text style={styles.buttonText}>
              Tap to clear
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home;