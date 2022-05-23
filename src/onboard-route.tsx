import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import LoginScreen from './screens/login-screen'
import OnboardingScreen from './screens/onboarding-screen'
import RegisterScreen from './screens/register-screen'

const Stack = createNativeStackNavigator()

export default function OnboardRoute() {
  return (
    <Stack.Navigator
      initialRouteName="First"
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
