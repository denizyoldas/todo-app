import { StatusBar } from 'expo-status-bar'
import { useAtom } from 'jotai'
import { StyleSheet, View, Text } from 'react-native'
import { isLoggedInAtom } from '../redux'
import { Avatar, Button } from 'native-base'

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
          color="black"
          borderRadius="22"
        >
          Log Out
        </Button>
      </View>
      <View style={styles.content}>
        <Text style={styles.taskTitle}>Task List</Text>
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
    backgroundColor: '#F4C27F',
    height: 300,
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    flex: 0.6,
    backgroundColor: 'white',
    height: 20
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
    backgroundColor: '#F4C27F',
    color: 'black'
  }
})
