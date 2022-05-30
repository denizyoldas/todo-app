import React, { useState, useEffect } from 'react'
import { Box, Center, PresenceTransition, Text } from 'native-base'


interface Props {
  isOpen?: boolean
  onChange?: () => void
}

const NewTodo: React.FC<Props> = (props) => {
  const [isVisible, setIsVisible] = useState<boolean>()

  useEffect(() => {
    console.log(props.isOpen)
      setIsVisible(props.isOpen)
  }, [props.isOpen])


  return (
    <Center>
    <PresenceTransition visible={isVisible} initial={{
      opacity: 0
    }}
      animate={{
        opacity: 1,
        transition: {
          duration: 250
        }
      }}
    >
      <Center>
        <Box>This comp. is add for new todo</Box>
      </Center>
    </ PresenceTransition>
    </Center>
  )
}

export default NewTodo
