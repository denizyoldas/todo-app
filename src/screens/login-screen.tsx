import { StatusBar } from 'expo-status-bar'
import { Alert, Image, StyleSheet, Text, View } from 'react-native'
import TodoButton from '../components/UI/TodoButton'
import { Box, Input } from 'native-base'
import { useCallback, useState } from 'react'
import { isLoggedInAtom, userAtom } from '../redux'
import { useAtom } from 'jotai'

const InputProps = {
  my: '2',
  padding: '3',
  backgroundColor: 'white',
  w: '100%',
  borderRadius: 22,
  size: 'xl'
}

export default function RegisterScreen({ navigation }: any) {
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom)
  const [user, setUser] = useAtom(userAtom)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const registerNavigate = useCallback(
    () => navigation.navigate('Register'),
    [navigation]
  )

  const signInHandle = () => {
    console.log(email)
    if (user?.email === email && user?.password === password) {
      setIsLoggedIn(true)
    } else {
      Alert.alert('Error', 'Invalid email or password')
    }
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/Done.png')} />
      <Text style={styles.text}>Welcome Back to</Text>
      <Text style={styles.textBold}>OUR REMINDER</Text>
      <Box alignItems="center" padding={10}>
        <Input
          {...InputProps}
          placeholder="Enter your email"
          onChange={(e: any) => setEmail(e.target.value)}
        />
        <Input
          {...InputProps}
          placeholder="Enter password"
          onChange={(e: any) => setPassword(e.target.value)}
        />
      </Box>
      <Text>Forgot Password</Text>
      <View style={styles.button}>
        <TodoButton
          text="Sign In"
          accessibilityLabel="Sign In"
          onPress={signInHandle}
        />
      </View>
      <Text style={styles.loginText}>
        Don’t have an account ?{' '}
        <Text onPress={registerNavigate} style={styles.signIn}>
          Register
        </Text>
      </Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(244, 194, 127, 0.67)',
    alignItems: 'center'
  },
  image: {
    marginTop: 25,
    width: 285,
    resizeMode: 'contain'
  },
  text: {
    fontSize: 16,
    lineHeight: 18
  },
  textBold: {
    fontSize: 24,
    lineHeight: 27
  },
  descriptionText: {
    fontSize: 12,
    lineHeight: 23,
    width: 280,
    textAlign: 'center',
    marginTop: 13
  },
  button: {},
  loginText: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16
  },
  signIn: {
    fontSize: 14,
    color: '#D8605B',
    fontWeight: '700',
    lineHeight: 16
  }
})
