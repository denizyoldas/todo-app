import React, { useState, useEffect } from 'react'
import { Text } from 'native-base'


interface Props {
  isOpen?: boolean
  onChange?: () => void
}

const NewTodo: React.FC<Props> = (props) => {
  const [isVisible, setIsVisible] = useState<boolean>()

  useEffect(() => {
    if (props.isOpen !== isVisible) {
      setIsVisible(props.isOpen)
    }
  }, [props.isOpen])


  return (
    <>
      <Text>This comp. is add for new todo</Text>
    </>
  )
}

export default NewTodo
