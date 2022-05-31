import { Feather } from '@expo/vector-icons'
import {
  Box,
  HStack,
  IconButton,
  useColorMode,
  useColorModeValue
} from 'native-base'
import React from 'react'

export default function ToggleTheme() {
  const { toggleColorMode, colorMode } = useColorMode()

  return (
    <HStack>
      <IconButton
        onPress={toggleColorMode}
        borderRadius={100}
        _icon={{
          as: Feather,
          name: useColorModeValue('moon', 'sun'),
          size: 8,
          color: useColorModeValue('black', '#F4C26F')
        }}
      />
    </HStack>
  )
}
