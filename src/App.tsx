import React, { useState } from 'react';

import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';
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
      <TransactionsProvider>

        <Header 
          onOpenNewTransactionModal={handleOpenNewTransactionModal} 
        />

        <Dashboard />

        <NewTransactionModal
          isOpen={isNewTransactionModalOpen} 
          onRequestClose={handleCloseNewTransactionModal} 
        />
      </TransactionsProvider>
    </React.Fragment>
  );
}