import { Image, Platform, StyleSheet, Text, View } from 'react-native'
import TodoButton from '../components/UI/TodoButton'
import { Box, Input, KeyboardAvoidingView, ScrollView } from 'native-base'
import React, { useEffect, useRef } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Formik } from 'formik'
import { RegisterModel } from '../types'
import { userAtom } from '../redux'
import { useAtom } from 'jotai'
import KeyboardWrapper from '../components/kayboard-wrapper'

const InputProps = {
  my: '2',
  padding: '3',
  backgroundColor: 'white',
  w: '100%',
  borderRadius: 22,
  size: 'xl'
}

const INITIAL_VALUE = {
  fullName: '',
  email: '',
  password: '',
  passwordConfirm: ''
}

export default function RegisterScreen({ navigation }: any) {
  const [user, setUser] = useAtom(userAtom)

  useEffect(() => {
    AsyncStorage.setItem('isFirst', 'false')
  }, [])

  const emailInpt = useRef()
  const passwordInpt = useRef()
  const passwordConfirmInpt = useRef()

  const loginNavigate = () => {
    navigation.navigate('Login')
  }

  const onSubmitHandle = (value: any) => {
    setUser(value)
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
    >
      <ScrollView style={{ backgroundColor: 'rgba(244, 194, 127, 0.67)' }}>
        <Formik onSubmit={onSubmitHandle} initialValues={INITIAL_VALUE}>
          {({ handleChange, handleBlur, handleSubmit, values, resetForm, focus }) => (
            <View style={styles.container}>
              <Image
                style={styles.image}
                source={require('../../assets/Done.png')}
              />
              <Text style={styles.text}>Get’s things done</Text>
              <Text style={styles.text}>with TODO</Text>
              <Text style={styles.descriptionText}>
                Let’s help you meet up your tasks
              </Text>
              <Box alignItems="center" padding={10}>
                <View>
                  <Input
                    {...InputProps}
                    placeholder="Enter your full name"
                    onChangeText={handleChange('fullName')}
                    onBlur={handleBlur('fullName')}
                    value={values.fullName}
                    onSubmitEditing={() => emailInpt.current.focus()}
                  />
                  <Input
                    {...InputProps}
                    ref={emailInpt}
                    placeholder="Enter your email"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    onSubmitEditing={() => passwordInpt.current.focus()}
                  />
                  <Input
                    {...InputProps}
                    ref={passwordInpt}
                    placeholder="Enter password"
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    onSubmitEditing={() => passwordConfirmInpt.current.focus()}
                  />
                  <Input
                    {...InputProps}
                    ref={passwordConfirmInpt}
                    placeholder="Confirm password"
                    mb="0"
                    onChangeText={handleChange('passwordConfirm')}
                    onBlur={handleBlur('passwordConfirm')}
                    value={values.passwordConfirm}
                  />
                </View>
              </Box>
              <View style={styles.button}>
                <TodoButton
                  text="Register"
                  accessibilityLabel="Register"
                  onPress={() => {
                    handleSubmit()
                    // resetForm()
                  }}
                />
              </View>
              <Text style={styles.loginText}>
                Already have an account ?{' '}
                <Text onPress={loginNavigate} style={styles.signIn}>
                  Sign In
                </Text>
              </Text>
            </View>
          )}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  image: {
    marginTop: 25,
    width: 285,
    resizeMode: 'contain'
  },
  text: {
    fontSize: 24,
    lineHeight: 27
  },
  descriptionText: {
    fontSize: 12,
    lineHeight: 23,
    width: 280,
    textAlign: 'center',
    marginTop: 13
  },
  button: {},
  loginText: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16
  },
  signIn: {
    fontSize: 14,
    color: '#D8605B',
    fontWeight: '700',
    lineHeight: 16
  }
})
