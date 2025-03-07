import 'dotenv/config'

import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'test', 'production'])
    .default('development'),
  DATABASE_URL: z.string(),
  PORT: z.number().default(3333),
})

const _env = envSchema.safeParse(process.env)

if (!_env.success) {
  console.error(
    '💥 \x1b[31mInvalid environment variables!\x1b[0m',
    _env.error.format(),
  )
  throw new Error('Invalid environment variables!')
}

export const env = _env.data
