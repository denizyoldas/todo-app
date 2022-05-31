import React from 'react'
import { Center, Box, Avatar, Text, View } from 'native-base'

export default function ProfileScreen() {
  return (
    <View flex={1} pt="16">
      <Center>
        <Box color="blue" w="50" h="50" borderColor="amber.100" borderWidth="1">
          <Text>This is my Profile</Text>
        </Box>
      </Center>
    </View>
  )
}
