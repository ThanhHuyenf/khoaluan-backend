import * as dotenv from 'dotenv'

dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

export const getEnv = (key: string): string => {
  return process.env[key]
}
export const ENV = process.env.NODE_ENV
export const PORT = process.env.PORT
// JWT
// Mongo

export const PAYMENT_SERVICE = getEnv('PAYMENT_SERVICE')
