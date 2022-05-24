import { Checkbox, Text, HStack, VStack } from 'native-base'
import React, { useState } from 'react'
import { ToDo } from '../types'
import TodoItem from './todo-item'

interface Props {
  todos: ToDo[]
  onTodoClick?: (id: number) => void
}

export default function TodoList(props: Props) {
  const [list, setList] = useState(props.todos)

  const checkBoxHandle = (id: number) => {
    setList(list => {
      const todo = list.find(item => item.id === id)
      if (todo) {
        todo.isCompleted = !todo.isCompleted
      }
      return [...list]
    })
  }

  return (
    <VStack space={2}>
      {props.todos.map((todo, index) => (
        <TodoItem key={todo.id} todo={todo} onTodoClick={checkBoxHandle} />
      ))}
    </VStack>
  )
}
