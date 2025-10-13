import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './style';
import { Controller, useFormContext } from 'react-hook-form';
import { PreferencesInfoparams } from '../../types/navigation';
import Input from '../Input';

const jobTypes = ['Remote', 'On-site', 'Hybrid'];

const Portfolio = () => {
  const { control } = useFormContext<PreferencesInfoparams>();
  const urlRegexp = /^(https?:\/\/)?((([a-zA-Z0-9\-_]+\.)+[a-zA-Z]{2,})|localhost|(\d{1,3}\.){3}\d{1,3})(:\d+)?(\/[^\s]*)?$/i;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.labelText}>Portfolio link</Text>
        <Input
          name='portfolio'
          control={control}
          rules={{
            required: 'Enter the link of your portfolio website',
            pattern: {
              value: urlRegexp,
              message: 'Enter a valid URL'
            }
          }}
          placeholder='Enter URL'
        />
      </View>

      <View>
        <Text style={styles.labelText}>Choose your Job type</Text>
        <Controller
          name='jobType'
          control={control}
          rules={{
            required: "Please select the type of Job"
          }}
          render={({ field: { value, onChange }, fieldState: { error } }) =>
            <View style={styles.radioIputContainer}>
              {jobTypes.map((item, index) =>
                <View key={index} style={styles.radioButtonContainer}>
                  <TouchableOpacity
                    onPress={() => onChange(item)}
                    style={styles.radioView}
                  >
                    <View
                      style={[
                        styles.radioButton,
                        value === item ? styles.activeButton : undefined
                      ]}
                    />
                  </TouchableOpacity>
                  <Text>{item}</Text>
                </View>
              )}
              {error && <Text style={styles.errorText}>{error.message}</Text>}
            </View>
          }
        />
      </View>

      <View>
        <Text style={styles.labelText}>Enter your bio</Text>
        <Input
          name='bio'
          control={control}
          rules={{
            required: 'Please fill up your bio',
            minLength: {
              value: 50,
              message: 'Enter more details in bio'
            }
          }}
          placeholder='Enter your bio'
          multiline
          numberOfLines={5}
          containerStyle={styles.bioInput}
          placeholderTextColor={'#909090'}
        />
      </View>
    </View>
  )
}

export default Portfolio;