import * as dotenv from 'dotenv'

dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

export const getEnv = (key: string): string => {
  return process.env[key]
}
export const ENV = process.env.NODE_ENV
export const PORT = process.env.PORT
// JWT
// MySQL
export const MYSQL_HOST = process.env.MYSQL_HOST
export const MYSQL_PORT = process.env.MYSQL_PORT
export const MYSQL_ROOT_USER = process.env.MYSQL_ROOT_USER
export const MYSQL_ROOT_PASSWORD = process.env.MYSQL_ROOT_PASSWORD
export const MYSQL_DATABASE = process.env.MYSQL_DATABASE
