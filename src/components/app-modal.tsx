import { Center, FormControl, Input, Modal, Button } from 'native-base'
import React, { useEffect, useRef, useState } from 'react'

interface Props {
  isVisible: boolean
  onClose?: (visible: boolean) => void
  onSubmit?: (val: string) => void
  title?: string
}

const AppModal: React.FC<Props> = ({ isVisible, onClose, onSubmit }) => {
  const [showModal, setShowModal] = useState(false)
  const [inpt, setInpt] = useState<string>('')

  useEffect(() => {
    console.log('AppModal: useEffect', isVisible)
    setShowModal(isVisible)
  }, [isVisible])

  useEffect(() => {
    onClose && onClose(showModal)
  }, [showModal])

  const saveHandle = () => {
    if (onSubmit) {
      onSubmit(inpt)
    }
    setShowModal(false)
  }

  const cancelHandle = () => {
    setShowModal(false)
  }

  return (
    <Center>
      <Button onPress={() => setShowModal(true)}>Button</Button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Task</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>description</FormControl.Label>
              <Input onChangeText={text => setInpt(text)} />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={cancelHandle}
              >
                Cancel
              </Button>
              <Button colorScheme="green" onPress={saveHandle}>
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  )
}

export default AppModal
