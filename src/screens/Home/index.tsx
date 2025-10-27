import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './style';

const ChildButton = React.memo(({ onPress }: { onPress: () => void }) => {
  console.log('Child rendered');
  return <Button title="Click Me" onPress={onPress} />;
});

const Home = () => {
  const [inp, setInp] = useState<string>('');
  const inputRef = useRef<TextInput>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [count, setCount] = useState(0);

  const handlePress = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  const toggleFocus = () => {
    inputRef.current?.isFocused() ?
      inputRef.current?.blur() :
      inputRef.current?.focus()
  }

  return (
    <SafeAreaView style={styles.safeAreaStyle} edges={['left', 'right']}>
      <View style={styles.container}>
        <Text>This is the Home screen</Text>
        <TextInput
          placeholder='Enter something'
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

        <Text>Count: {count}</Text>
        <ChildButton onPress={handlePress} />
      </View>
    </SafeAreaView>
  )
}

export default Home;