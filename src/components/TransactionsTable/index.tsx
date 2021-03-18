import React, { useEffect } from 'react';
import { api } from '../../styles/api';

import { Container } from './styles';

const TransactionsTable: React.FC = () => {
    useEffect(() => {
        api.get('transactions').then(response => response.data)
    }, [])

  return (
    <Container>
        <table>
            <thead>
                <tr>
                    <th>Titulo</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                    <td>Desenvolvimento de website</td>
                    <td>R$12.000</td>
                    <td>Desenvolvimento</td>
                    <td>20/02/2021</td>
            </tr>
            <tr>
                    <td>Desenvolvimento de website</td>
                    <td>R$12.000</td>
                    <td>Desenvolvimento</td>
                    <td>20/02/2021</td>
            </tr>
            </tbody>
        </table>
    </Container>
  )
}

export default TransactionsTable;