import React from 'react';
import Modal from 'react-modal'

type NewTransactionModalProps = {
    isOpen: boolean
    onRequestClose: () => void
}

const NewTransactionModal: React.FC<NewTransactionModalProps> = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
    ></Modal>
  )
}

export default NewTransactionModal;