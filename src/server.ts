import fastify from 'fastify'

import { knex } from './database'
import { env } from './env'

const app = fastify()

app.get('/hello', async () => {
  const tables = knex('sqlite_schema').select('*')

  return tables
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP server running at http://localhost:3333')
  })
