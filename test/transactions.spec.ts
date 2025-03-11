import request from 'supertest'
import { afterAll, beforeAll, describe, it } from 'vitest'

import { app } from '../src/app'

describe('Routes: Transactions', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to create a transaction', async () => {
    await request(app.server)
      .post('/transactions')
      .send({ title: 'New transaction', amount: 5000, type: 'credit' })
      .expect(201)
  })
})
