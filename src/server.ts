import fastify from 'fastify'

import { knex } from './database'

const app = fastify()

app.get('/hello', async () => {
  const tables = knex('sqlite_schema').select('*')

  return tables
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server running at http://localhost:3333')
  })
