import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './style';
import { Controller, useFormContext } from 'react-hook-form';
import { Dropdown } from 'react-native-element-dropdown';
import Input from '../Input';
import { PreferencesInfoparams } from '../../types/navigation';

const EducationInfo = () => {
  const { control } = useFormContext<PreferencesInfoparams>();

  const data = [
    { label: '10th Pass', value: '10th Pass' },
    { label: '12th Pass', value: '12th Pass' },
    { label: 'Graduate', value: 'Graduate' },
    { label: 'Post graduate', value: 'Post graduate' },
    { label: 'Doctorate', value: 'Doctorate' },
  ];

  const skills = [
    'React.js',
    'React Native',
    'Javascript',
    'Typescript',
    'Java',
  ];

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.labelText}>Select your highest qualification</Text>
        <Controller
          name='qualification'
          control={control}
          rules={{
            required: "Please select your qualification"
          }}
          render={({ field: { value, onChange }, fieldState: { error } }) =>
            <View>
              <Dropdown
                data={data}
                style={styles.dropdownStyle}
                maxHeight={180}
                onChange={item => {
                  onChange(item.value);
                }}
                selectedTextStyle={styles.selectedTextStyle}
                search
                labelField="value"
                valueField="value"
                value={value}
                placeholder="Select qualification"
                searchPlaceholder="Search..."
              />
              {error && <Text style={styles.errorText}>{error.message}</Text>}
            </View>
          }
        />
      </View>
      <Input
        name='experience'
        label='Years of Experience'
        control={control}
        keyboardType='number-pad'
        rules={{
          required: "Please enter your years of experience"
        }}
        placeholder='Number of years of experience'
      />
      <View>
        <Text style={styles.labelText}>Select your skills</Text>
        <Controller
          name='skills'
          control={control}
          rules={{
            required: "Please select at least one skill"
          }}
          render={({ field: { value, onChange }, fieldState: { error } }) =>
            <View style={styles.checkboxContainer}>
              {skills.map((item, index) =>
                <View key={index} style={styles.checkboxOption}>
                  <TouchableOpacity
                    onPress={() => {
                      value.includes(item) ?
                        onChange(value.filter(x => x !== item)) :
                        onChange([...value, item])
                    }}
                  >
                    <View style={styles.rightTickContainer}>
                      {value.some(x => x === item) && <Text>✔</Text>}
                    </View>
                  </TouchableOpacity>
                  <Text>{item}</Text>
                </View>
              )}
              {error && <Text style={styles.errorText}>{error.message}</Text>}
            </View>
          }
        />
      </View>
    </View>
  )
}

export default EducationInfo;