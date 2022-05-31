import { StatusBar } from 'expo-status-bar'
import { useAtom } from 'jotai'
import { StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { isLoggedInAtom } from '../redux'
import TodoList from '../components/todo-list'
import { AntDesign, Feather } from '@expo/vector-icons'
import { ToDo } from '../types'
import {
  Heading,
  Fab,
  Box,
  Avatar,
  Button,
  Input,
  PresenceTransition,
  IconButton,
  useColorModeValue,
  View,
  Text
} from 'native-base'
import React, { useCallback, useEffect, useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import * as ImagePicker from 'expo-image-picker'

const TODOLIST: ToDo[] = [
  { id: 1, title: 'Buy milk', isCompleted: false, isDeleted: false },
  { id: 2, title: 'Buy eggs', isCompleted: true, isDeleted: false },
  { id: 3, title: 'Buy bread', isCompleted: false, isDeleted: false },
  { id: 4, title: 'Buy cheese', isCompleted: true, isDeleted: false },
  { id: 5, title: 'Buy milk', isCompleted: true, isDeleted: false }
]

export default function MainScreen() {
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom)
  const [btnFocus, setBtnFocus] = useState(false)
  const [todoList, setTodoList] = useState<ToDo[]>(TODOLIST)
  const [isInputVisible, setIsInputVisible] = useState(false)
  const [inputValue, setInputValue] = useState<string>()
  const navigation = useNavigation<DrawerNavigationProp<{}>>()
  const [image, setImage] = useState<string>('https://i.pravatar.cc/300')

  useEffect(() => {
    ;(async () => {
      if (Platform.OS !== 'web') {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (status !== 'granted') {
          alert(
            'Sorry, Camera roll permissions are required to make this work!'
          )
        }
      }
    })()
  }, [])

  const logOutHandle = () => {
    setIsLoggedIn(false)
  }

  const inputSubmitHandle = (_: any) => {
    setInputValue('')
    setIsInputVisible(false)
    setTodoList([
      ...todoList,
      {
        id: todoList.length + 1,
        title: inputValue || '',
        isCompleted: false,
        isDeleted: false
      }
    ])
  }

  const inputChangeHandle = (text: string) => {
    setInputValue(text)
  }

  const handlePressMenuButton = useCallback(() => {
    navigation.openDrawer()
  }, [navigation])

  const chooseImg = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      aspect: [4, 3],
      quality: 1,
      allowsEditing: true
    })

    console.log(result)

    if (!result.cancelled) {
      setImage(result.uri)
    }
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.userCard
        }}
        backgroundColor={useColorModeValue(
          'rgba(244, 194, 127, 0.67)',
          '#2E0249'
        )}
      >
        <Box position="absolute" top="10" left="4">
          <IconButton
            onPress={handlePressMenuButton}
            borderRadius={100}
            _icon={{
              as: Feather,
              name: 'menu',
              size: 6,
              color: useColorModeValue('black', 'white')
            }}
          />
        </Box>
        <TouchableOpacity onPress={chooseImg}>
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
              uri: image
            }}
          />
        </TouchableOpacity>
        <Text style={styles.fullName}>Monica Gamage</Text>
        <Text style={styles.username}>@monicagamage</Text>
        <Button
          onPress={logOutHandle}
          backgroundColor="#F4C27F"
          borderRadius="22"
          marginTop="3"
          leftIcon={<MaterialIcons name="logout" size={12} color="black" />}
        >
          <Text> Log Out</Text>
        </Button>
      </View>
      <View
        style={styles.content}
        backgroundColor={useColorModeValue('white', '#570A57')}
      >
        <Heading pb="10">Task List</Heading>
        <Box
          alignSelf="center"
          borderRadius="24"
          shadow="8"
          width="350"
          padding={22}
          backgroundColor="white"
        >
          {isInputVisible && (
            <PresenceTransition
              visible={isInputVisible}
              initial={{ opacity: 0, translateX: -50 }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 250
                }
              }}
            >
              <Input
                placeholder="add task"
                onChangeText={inputChangeHandle}
                // onKeyPress={inputHandle}
                border="1"
                borderColor="amber.200"
                mb="3"
                returnKeyType="done"
                onSubmitEditing={inputSubmitHandle}
              />
            </PresenceTransition>
          )}
          <TodoList todos={todoList} />
        </Box>
      </View>
      <StatusBar style="auto" />
      <Fab
        renderInPortal={true}
        size="md"
        bottom="10"
        shadow="0"
        icon={<AntDesign name="pluscircle" size={56} color="#F4C27F" />}
        onPress={() => {
          // setModalVisible(true)
          setIsInputVisible(v => !v)
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  userCard: {
    flex: 0.4,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    flex: 0.6,
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
    fontSize: 12,
    color: '#D8605B'
  },
  fullName: {
    fontWeight: '500',
    fontSize: 16
  },
  logoutButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
function dismissKeyboard() {
  throw new Error('Function not implemented.')
}
