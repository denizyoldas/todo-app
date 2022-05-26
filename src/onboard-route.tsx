import AsyncStorage from '@react-native-async-storage/async-storage'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useEffect, useState } from 'react'
import Loading from './components/loading'
import LoginScreen from './screens/login-screen'
import OnboardingScreen from './screens/onboarding-screen'
import RegisterScreen from './screens/register-screen'

const Stack = createNativeStackNavigator()

export default function OnboardRoute() {
  const [isFirst, setIsFirst] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const store = async () => {
      const isFirstTime = await AsyncStorage.getItem('isFirst')
      return isFirstTime
    }

    store().then(res => {
      if (res) {
        setIsFirst(false)
      }

      setIsLoading(false)
    })
  }, [isFirst])

  if (isLoading) {
    return <Loading />
  }

  return (
    <Stack.Navigator
      initialRouteName={isFirst ? 'First' : 'Login'}
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="First" component={OnboardingScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  )
}
