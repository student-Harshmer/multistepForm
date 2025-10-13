import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Input from '../Input';
import { styles } from './style';
import { Controller, useFormContext } from 'react-hook-form';
import { PreferencesInfoparams } from '../../types/navigation';

const UserInfo = () => {
  const { control } = useFormContext<PreferencesInfoparams>();

  return (
    <View style={styles.mainContainer}>
      <Input
        name='fullName'
        rules={{
          required: "Name is required",
        }}
        control={control}
        placeholder='Enter your name'
        label='Enter your full name'
        placeholderTextColor={'#707070'}
      />
      <Input
        name='email'
        rules={{
          required: "Email is required",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: 'Invalid Email'
          }
        }}
        control={control}
        placeholder='Enter email'
        label='Enter your email'
        placeholderTextColor={'#707070'}
      />
      <Input
        name='phoneNumber'
        rules={{
          required: "Phone number is required",
          minLength: {
            value: 10,
            message: 'Phone number must have at least 10 digits'
          }
        }}
        control={control}
        keyboardType='numeric'
        placeholder='Enter phone number'
        label='Enter your phone number'
        placeholderTextColor={'#707070'}
      />
      <Text style={styles.genderInputText}>Select your gender</Text>
      <Controller
        control={control}
        name='gender'
        rules={{
          required: "Please select a gender"
        }}
        render={({ field: { value, onChange }, fieldState: { error } }) =>
          <View style={styles.radioIputContainer}>
            <View style={styles.radioButtonContainer}>
              <TouchableOpacity
                onPress={() => onChange('male')}
                style={styles.radioView}
              >
                <View
                  style={[
                    styles.radioButton,
                    value === 'male' ? styles.activeButton : undefined
                  ]}
                />
              </TouchableOpacity>
              <Text>Male</Text>
            </View>
            <View style={styles.radioButtonContainer}>
              <TouchableOpacity
                onPress={() => onChange('female')}
                style={styles.radioView}
              >
                <View
                  style={[
                    styles.radioButton,
                    value === 'female' ? styles.activeButton : undefined
                  ]}
                />
              </TouchableOpacity>
              <Text>Female</Text>
            </View>
            <View style={styles.radioButtonContainer}>
              <TouchableOpacity
                onPress={() => onChange('other')}
                style={styles.radioView}
              >
                <View
                  style={[
                    styles.radioButton,
                    value === 'other' ? styles.activeButton : undefined
                  ]}
                />
              </TouchableOpacity>
              <Text>Other</Text>
            </View>
            {error && <Text style={styles.errorText}>{error.message}</Text>}
          </View>
        }
      />
    </View>
  )
}

export default UserInfo;