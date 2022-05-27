import react from 'react'
import { KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native'


const KeyboardWrapper: React.FC = ({ children }) => {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS ? 'padding' : undefined}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {children}
        </TouchableWithoutFeedback>

      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default KeyboardWrapper
