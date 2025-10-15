import {
  View,
  ScrollView,
  useWindowDimensions,
  Text,
  TouchableOpacity
} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './style'
import UserInfo from '../../components/UserInfo'
import { Image } from 'react-native'
import { FormProvider, useForm } from 'react-hook-form'
import { PreferencesInfoparams } from '../../types/navigation'
import EducationInfo from '../../components/EducationInfo'
import Portfolio from '../../components/Portfolio'
import Review from '../../components/Review'
import { useNavigation } from '@react-navigation/native'

const Form = () => {
  const { width } = useWindowDimensions();
  const isHorizontal = width > 600;
  const progressWidth = width - 80;
  const navigation = useNavigation<any>();
  const methods = useForm<PreferencesInfoparams>({
    defaultValues: {
      fullName: '',
      email: '',
      phoneNumber: undefined,
      gender: '',
      qualification: [],
      experience: undefined,
      skills: [],
      portfolio: '',
      jobType: '',
      bio: '',
    }
  });
  const [page, setPage] = useState(1);
  const [visitedPage, setVisitedPage] = useState(1);
  const { handleSubmit } = methods;

  const changeSection = async (isNextPressed: boolean, newPage?: number) => {
    if (isNextPressed) {
      const isValid = await methods.trigger();
      if (!isValid) return;

      const newVisited = Math.max(visitedPage, page);
      setVisitedPage(newVisited);

      if (newPage) {
        const allowedPage = Math.min(newPage, newVisited + 1);
        setPage(allowedPage);
      } else {
        setPage(prev => prev + 1);
      }
    } else {
      setPage(prev => prev - 1);
    }
  };

  return (
    <SafeAreaView style={[styles.safeAreaStyle, styles.safePadding]}>
      <View style={styles.progressContainer}>
        <View style={styles.totalProgressIndicator}>
          <View style={[styles.progressbar, { width: progressWidth / 3 * (page - 1) }]} />
        </View>
        {Array.from({ length: 4 }).map((_, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={
                (index + 1 > page) ?
                  handleSubmit(() => {
                    changeSection(true, index + 1);
                  }) :
                  (index + 1 === page) ?
                    undefined :
                    () => setPage(index + 1)
              }
              style={[
                styles.stepContainer,
                page >= index + 1 && styles.activestep,
                page === index + 1 && styles.currentStep,
                index === 0 ? styles.leftPadding :
                  index === 3 ? styles.rightPadding :
                    { left: (width / 3 - 7) * index }
              ]}
            >
              <Text style={page >= index + 1 && styles.activestepText}>{index + 1}</Text>
            </TouchableOpacity>
          )
        })}
      </View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(
            'Webscreen',
            { url: 'https://github.com/student-Harshmer/multistepForm' }
          )
        }
        style={styles.header}
      >
        <Image
          source={require('../../assets/images/Logo.png')}
          style={isHorizontal ? styles.horizontalLogo : styles.logoStyle}
        />
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.container}>
        <View
          style={[
            styles.inputContainer,
            isHorizontal ? styles.horizontalInputStyle : styles.verticalInputStyle
          ]}
        >
          <FormProvider {...methods}>
            {page === 1 && <UserInfo />}
            {page === 2 && <EducationInfo />}
            {page === 3 && <Portfolio />}
            {page === 4 && <Review />}
          </FormProvider>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        {page > 1 &&
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => changeSection(false)}
          >
            <Text style={styles.buttonText}>Prev</Text>
          </TouchableOpacity>
        }
        {page < 4 &&
          <TouchableOpacity
            onPress={handleSubmit(() => changeSection(true))}
            style={styles.submitButton}
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        }
        {page === 4 &&
          <TouchableOpacity
            onPress={handleSubmit(() => navigation.navigate('AppStack', { screen: 'Home' }))}
            style={styles.submitButton}
          >
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        }
      </View>
    </SafeAreaView>
  )
}

export default Form;