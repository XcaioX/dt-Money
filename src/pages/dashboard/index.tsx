import React from 'react';

import { Summary } from '../../components/Summary'
import TransactionsTable from '../../components/TransactionsTable';
import { Container } from './styles';

export const Dashboard: React.FC = () => {
    return (
        <Container>
            <Summary />
            <TransactionsTable />
        </Container>
    )
}