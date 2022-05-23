import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'

interface Props {
  onPress?: () => void
  text: string
  stlye?: any
  accessibilityLabel?: string
  type?: 'primary' | 'secondary' | 'tertiary'
}

export default function TodoButton(props: Props) {
  const onPressLearnMore = () => {
    props.onPress && props.onPress()
  }

  return (
    <TouchableOpacity
      style={styles.buttonPrimary}
      onPress={onPressLearnMore}
      accessibilityLabel={props.accessibilityLabel}
    >
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonPrimary: {
    backgroundColor: '#D8605B',
    padding: 10,
    borderRadius: 50,
    margin: 10,
    width: 315,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontWeight: '700',
    lineHeight: 22,
    fontSize: 16
  }
})
