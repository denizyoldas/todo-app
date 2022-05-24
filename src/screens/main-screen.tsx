import { StatusBar } from 'expo-status-bar'
import { useAtom } from 'jotai'
import { StyleSheet, View, Text } from 'react-native'
import { isLoggedInAtom } from '../redux'
import { Avatar, Box, Button } from 'native-base'
import TodoList from '../components/todo-list'
import { ToDo } from '../types'
import { Heading } from 'native-base'
import React from 'react'

const TODOLIST: ToDo[] = [
  { id: 1, title: 'Buy milk', isCompleted: false, isDeleted: false },
  { id: 2, title: 'Buy eggs', isCompleted: true, isDeleted: false },
  { id: 3, title: 'Buy bread', isCompleted: false, isDeleted: false },
  { id: 4, title: 'Buy cheese', isCompleted: true, isDeleted: false },
  { id: 5, title: 'Buy milk', isCompleted: true, isDeleted: false }
]

export default function MainScreen() {
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom)

  const logOutHandle = () => {
    setIsLoggedIn(false)
  }

  return (
    <View style={styles.container}>
      <View style={styles.userCard}>
        <Avatar
          size="2xl"
          borderColor="#D8605B"
          borderWidth={4}
          padding={2}
          mb="3"
          mt="8"
          backgroundColor="transparent"
          alignSelf="center"
          source={{
            uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
          }}
        />
        <Text style={styles.fullName}>Monica Gamage</Text>
        <Text style={styles.username}>@monicagamage</Text>
        <Button
          onPress={logOutHandle}
          backgroundColor="#F4C27F"
          borderRadius="22"
        >
          <Text>Log Out</Text>
        </Button>
      </View>
      <View style={styles.content}>
        <Heading pb="10">Task List</Heading>
        <Box
          alignSelf="center"
          borderRadius="24"
          shadow="8"
          width="350"
          padding={22}
          backgroundColor="white"
        >
          <TodoList todos={TODOLIST} />
        </Box>
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'column'
  },
  userCard: {
    flex: 0.4,
    backgroundColor: 'rgba(244, 194, 127, 0.67)',
    height: 300,
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    flex: 0.6,
    backgroundColor: 'white',
    height: 20,
    alignItems: 'center',
    paddingTop: 20
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 115,
    letterSpacing: 0.06,
    opacity: 0.75
  },
  username: {
    fontWeight: '500',
    fontSize: 10,
    color: '#D8605B'
  },
  fullName: {
    fontWeight: '500',
    fontSize: 14
  },
  logoutButton: {
    backgroundColor: '#F4C27F'
  }
})
