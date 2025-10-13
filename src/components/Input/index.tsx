import { StyleProp, Text, TextInput, TextInputProps, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Controller, RegisterOptions } from 'react-hook-form';

type Props = Readonly<{
  control: any;
  name: string;
  rules: RegisterOptions;
  label?: string;
  placeholder?: string;
  style?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>
}> & Omit<TextInputProps, 'onChangeText'>;

const Input = ({ control, name, rules = {}, label, placeholder, style, containerStyle, secureTextEntry, ...rest }: Props) => {
  const [securePassword, setSecurePassword] = useState(secureTextEntry);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { value, onChange, onBlur }, fieldState: { error } }) =>
        <View style={styles.container}>
          {label ? <Text style={styles.labelText}>{label}</Text> : undefined}
          <View style={[
            containerStyle ? containerStyle : styles.inputStyleContainer,
            error ? styles.errorInputStyle : undefined,
            isFocused ? styles.focusedInputStyle : undefined
          ]}>
            <TextInput
              style={[styles.inputStyle, style]}
              value={value}
              onChangeText={onChange}
              autoCapitalize='none'
              autoCorrect={false}
              onFocus={() => setIsFocused(true)}
              onBlur={() => {
                setIsFocused(false);
                onBlur();
              }}
              placeholder={placeholder}
              secureTextEntry={securePassword}
              {...rest}
            />
            {secureTextEntry && (
              <TouchableOpacity
                style={styles.eyeIconButton}
                onPress={() => setSecurePassword(!securePassword)}
              >
                <FontAwesomeIcon
                  icon={securePassword === true ? faEye as IconProp : faEyeSlash as IconProp}
                  color='#007AFF'
                  size={23}
                />
              </TouchableOpacity>
            )}
          </View>
          {error && <Text style={styles.errorText}>{error.message}</Text>}
        </View>
      }
    />
  )
}

export default Input;