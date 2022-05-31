import React, { useCallback, useEffect, useState } from 'react'
import {
  HStack,
  VStack,
  Heading,
  IconButton,
  useColorModeValue
} from 'native-base'
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import { Feather } from '@expo/vector-icons'
import MenuButton from './menu-button'
import AnimatedColorBox from './animated-color-box'
import ToggleTheme from './toggle-theme'

const Sidebar = (props: DrawerContentComponentProps) => {
  const { state, navigation } = props
  const [activeRoute, setActiveRoute] = useState(state.routeNames[state.index])

  useEffect(() => {
    setActiveRoute(state.routeNames[state.index])
  }, [state.routeNames[state.index]])
  // const currentRoute = state.routeNames[state.index]

  const handlePressBackButton = useCallback(() => {
    navigation.closeDrawer()
  }, [navigation])

  const handlePressMenu = useCallback(
    (menu: string) => {
      navigation.navigate(menu)
    },
    [navigation]
  )

  return (
    <AnimatedColorBox
      safeArea
      flex={1}
      p={2}
      bg={useColorModeValue('white', 'darkBlue.800')}
    >
      <VStack flex={1} space={2}>
        <HStack justifyContent="flex-end">
          <IconButton
            onPress={handlePressBackButton}
            borderRadius={100}
            _icon={{
              as: Feather,
              name: 'x-circle',
              size: 8,
              color: 'red.500'
            }}
          />
        </HStack>
        <Heading mb={4} size="lg">
          Monica Gamage
        </Heading>
        <MenuButton
          active={activeRoute === 'Main'}
          onPress={() => handlePressMenu('Main')}
          icon="inbox"
        >
          Tasks
        </MenuButton>
        <MenuButton
          active={activeRoute === 'About'}
          onPress={() => handlePressMenu('About')}
          icon="info"
        >
          About
        </MenuButton>
        <MenuButton
          active={activeRoute === 'Profile'}
          icon="user"
          onPress={() => {
            handlePressMenu('Profile')
          }}
        >
          Profile
        </MenuButton>
      </VStack>
      <VStack flex={1} justifyContent="flex-end" p={2}>
        <ToggleTheme />
      </VStack>
    </AnimatedColorBox>
  )
}

export default Sidebar
