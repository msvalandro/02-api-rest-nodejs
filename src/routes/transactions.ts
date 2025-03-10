import { FastifyInstance } from 'fastify'
import knex from 'knex'

export async function transactionRoutes(app: FastifyInstance) {
  app.get('/hello', async () => {
    const tables = knex('sqlite_schema').select('*')

    return tables
  })
}
