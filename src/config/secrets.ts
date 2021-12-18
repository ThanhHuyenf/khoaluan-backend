import * as dotenv from 'dotenv'
import { Options } from '@mikro-orm/core';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

export const getEnv = (key: string): string => {
  return process.env[key]
}
export const ENV = process.env.NODE_ENV
export const PORT = process.env.PORT
// JWT
// MySQL
export const config : Options = {
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: +process.env.MYSQL_PORT,
  user: process.env.MYSQL_ROOT_USER,
  password: process.env.MYSQL_ROOT_PASSWORD,
  dbName: process.env.MYSQL_DATABASE,
  entities: ['dist/**/*.entity.js'],
  entitiesTs: ['src/**/*.entity.ts'],
}

export const PAYMENT_SERVICE = getEnv('PAYMENT_SERVICE')
