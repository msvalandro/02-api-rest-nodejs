import fastify from 'fastify'

import { env } from './env'
import { transactionRoutes } from './routes/transactions'

const app = fastify()

app.register(transactionRoutes, {
  prefix: 'transactions',
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP server running at http://localhost:3333')
  })
