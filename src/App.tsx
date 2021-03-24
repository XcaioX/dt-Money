import React, { useState } from 'react';

import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { Dashboard } from './pages/dashboard';
import { Global } from './styles/global';

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  const handleOpenNewTransactionModal = () => {
      setIsNewTransactionModalOpen(true)
  }

  const handleCloseNewTransactionModal = () => {
      setIsNewTransactionModalOpen(false)
  }

  return (
    <React.Fragment>
      <Global />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />
    </React.Fragment>
  );
}