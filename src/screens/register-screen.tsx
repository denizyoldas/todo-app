import { StatusBar } from 'expo-status-bar'
import { Image, StyleSheet, Text, View } from 'react-native'
import TodoButton from '../components/UI/TodoButton'
import { Box, Input } from 'native-base'

const InputProps = {
  my: '2',
  padding: '3',
  backgroundColor: 'white',
  w: '100%',
  borderRadius: 22,
  size: 'xl'
}

export default function RegisterScreen({ navigation }: any) {
  const loginNavigate = () => {
    navigation.navigate('Login')
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/Done.png')} />
      <Text style={styles.text}>Get’s things done</Text>
      <Text style={styles.text}>with TODO</Text>
      <Text style={styles.descriptionText}>
        Let’s help you meet up your tasks
      </Text>
      <Box alignItems="center" padding={10}>
        <Input {...InputProps} placeholder="Enter your full name" />
        <Input {...InputProps} placeholder="Enter your email" />
        <Input {...InputProps} placeholder="Enter password" />
        <Input {...InputProps} placeholder="Confirm password" mb="0" />
      </Box>
      <View style={styles.button}>
        <TodoButton text="Register" accessibilityLabel="Register" />
      </View>
      <Text style={styles.loginText}>
        Already have an account ?{' '}
        <Text onPress={loginNavigate} style={styles.signIn}>
          Sign In
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
