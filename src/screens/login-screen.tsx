import { StatusBar } from 'expo-status-bar'
import { useAtom } from 'jotai'
import { Image, StyleSheet, Text, View } from 'react-native'
import TodoButton from '../components/UI/TodoButton'
import { isLoggedInAtom } from '../redux'

export default function LoginScreen() {
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom)

  const loginHandle = () => {
    console.log(isLoggedIn)
    setIsLoggedIn(true)
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/Done.png')} />
      <Text style={styles.text}>Get’s things done with TODO</Text>
      <View style={styles.button}>
        <TodoButton
          onPress={loginHandle}
          text="Login"
          accessibilityLabel="Login"
        />
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4C27F',
    alignItems: 'center'
  },
  image: {
    marginTop: 160
  },
  welcomeText: {
    fontSize: 16,
    lineHeight: 18
  },
  text: {
    fontSize: 24,
    lineHeight: 27
  },
  descriptionText: {
    fontSize: 12,
    lineHeight: 16,
    width: 280,
    textAlign: 'center',
    marginTop: 13
  },
  button: {
    marginTop: 120
  }
})
