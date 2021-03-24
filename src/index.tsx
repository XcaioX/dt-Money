import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'

import { App } from './App';

createServer({
  models: {
    transactions: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Web designer',
          type: 'deposit',
          category: 'Dev',
          amount: 199.56,
          createdAt: new Date()
        },
        {
          id: 2,
          title: 'Freelance web developer',
          type: 'withdraw',
          category: 'Dev',
          amount: 222.22,
          createdAt: new Date()
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transactions')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      data.createdAt = new Date()
      return schema.create('transactions', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);