import { Checkbox, HStack, Text } from 'native-base'
import React from 'react'
import { ToDo } from '../types'

interface Props {
  todo: ToDo
  onTodoClick?: (id: number) => void
}

export default function TodoItem({ todo, onTodoClick }: Props) {
  const clickHandle = (id: number) => {
    if (onTodoClick) {
      onTodoClick(id)
    }
  }

  return (
    <HStack
      w="100%"
      key={todo.id}
      justifyContent="space-between"
      alignItems="center"
    >
      <Checkbox
        isChecked={todo.isCompleted}
        onChange={() => clickHandle(todo.id)}
        value={todo.title}
        colorScheme="rgba(244, 194, 127, 0.67)"
        backgroundColor="rgba(244, 194, 127, 0.67)"
        color="white"
      />
      <Text
        width="100%"
        flexShrink={1}
        textAlign="left"
        mx="2"
        strikeThrough={todo.isCompleted}
        _light={{
          color: todo.isCompleted ? 'gray.400' : 'coolGray.800'
        }}
        _dark={{
          color: todo.isCompleted ? 'gray.400' : 'coolGray.50'
        }}
      >
        {todo.title}
      </Text>
    </HStack>
  )
}
