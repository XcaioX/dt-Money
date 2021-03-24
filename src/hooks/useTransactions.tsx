import { createContext, useContext, useEffect, useState } from 'react'
import { api } from '../styles/api'

type TransactionsProviderProps = {
    transactions: TransactionsData[]
    createTransaction: (transactions: TransactionInput) => Promise<void>
}

type TransactionInput = Omit<TransactionsData, 'id' | 'createdAt'>

type TransactionsData = {
    id: number
    title: string
    amount: number
    type: string
    category: string
    createdAt: string
}

export const Transactionscontext = createContext<TransactionsProviderProps>({} as TransactionsProviderProps)

export const TransactionsProvider: React.FC = ({ children }) => {
    const [transactions, setTransactions] = useState<TransactionsData[]>([])

    useEffect(() => {
        api.get('transactions').then(response => setTransactions(response.data.transactions))
    }, [])

    const createTransaction = async (transactionInput: TransactionInput) => {
        const response = await api.post('/transactions', transactionInput)
        const { transaction } = response.data

        setTransactions([
            ...transactions,
            transaction
        ])
    }

    return (
        <Transactionscontext.Provider value={{ transactions, createTransaction }}>
            {children}
        </Transactionscontext.Provider>
    )
}

export const useTransactions = () => {
    const context = useContext(Transactionscontext)

    if (!context) throw new Error('Transactionscontext is not a context')

    return context
}