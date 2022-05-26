import AppContainer from './src/components/app-container'
import Navigator from './src/'
import React from 'react'
import OnboardRoute from './src/onboard-route'
import { isLoggedInAtom } from './src/redux'
import { useAtom } from 'jotai'

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom)

  return (
    <AppContainer>{isLoggedIn ? <Navigator /> : <OnboardRoute />}</AppContainer>
  )
}
