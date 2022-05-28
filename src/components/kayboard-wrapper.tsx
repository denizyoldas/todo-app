import react from 'react'
import {
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform
} from 'react-native'

interface Props {
  style?: Object
}

const KeyboardWrapper: React.FC<Props> = ({ children, style }) => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1, ...style }}
      behavior={Platform.OS ? 'padding' : undefined}
    >
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {children}
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default KeyboardWrapper
