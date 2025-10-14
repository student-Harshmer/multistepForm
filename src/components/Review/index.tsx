import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './style';
import { useFormContext } from 'react-hook-form';
import { PreferencesInfoparams } from '../../types/navigation';
import { useNavigation } from '@react-navigation/native';

const Review = () => {
  const { getValues } = useFormContext<PreferencesInfoparams>();
  const navigation = useNavigation<any>();
  const data = getValues();

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Details of the User</Text>
      <Text style={styles.inputKey}>FullName: {data.fullName}</Text>
      <Text style={styles.inputKey}>Email: {data.email}</Text>
      <Text style={styles.inputKey}>Phone number: {data.phoneNumber}</Text>
      <Text style={styles.inputKey}>Gender: {data.gender}</Text>
      <Text style={styles.inputKey}>Qualification: {data.qualification}</Text>
      <Text style={styles.inputKey}>Experience: {data.experience} years</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.inputKey}>Skills:</Text>
        <View style={styles.valueTextContainer}>
          <Text style={styles.inputKey}>{data.skills.join(', ')}</Text>
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.inputKey}>Portfolio link:</Text>
        <View style={styles.valueTextContainer}>
          <Text
            style={[styles.inputKey, styles.linkText]}
            onPress={() =>
              navigation.navigate('Webscreen', { url: data.portfolio })
            }
          >
            {data.portfolio}
          </Text>
        </View>
      </View>
      <Text style={styles.inputKey}>Job type: {data.jobType}</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.inputKey}>Bio:</Text>
        <View style={styles.valueTextContainer}>
          <Text style={styles.inputKey}>{data.bio}</Text>
        </View>
      </View>
    </View>
  )
}

export default Review;