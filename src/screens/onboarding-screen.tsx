import { StatusBar } from 'expo-status-bar'
import { Image, StyleSheet, Text, View } from 'react-native'
import TodoButton from '../components/UI/TodoButton'

export default function OnboardingScreen({ navigation }: any) {
  const startHandle = () => {
    navigation.navigate('Register')
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/Done.png')} />
      <Text style={styles.welcomeText}>Welcome to</Text>
      <Text style={styles.text}>OUR REMINDER</Text>
      <Text style={styles.descriptionText}>
        Lorem ipsum dolor sit amet, consectetur kardelen yavuc. Interdum dictum
        tempus, interdum at dignissim metus. Ultricies sed nunc.
      </Text>

      <View style={styles.button}>
        <TodoButton
          text="Get Start"
          accessibilityLabel="Start"
          onPress={startHandle}
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
