const dotenv = require('dotenv')

dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

function getEnv(key) {
    return process.env[key]
}

const PORT = getEnv('PORT')
const MYSQL_HOST = getEnv('MYSQL_HOST')
const MYSQL_ROOT_USER = getEnv('MYSQL_ROOT_USER')
const MYSQL_USER = getEnv('MYSQL_USER')
const MYSQL_PASSWORD = getEnv('MYSQL_PASSWORD')
const MYSQL_DATABASE = getEnv('MYSQL_DATABASE')
const MYSQL_PORT = getEnv('MYSQL_PORT')
module.exports = {PORT,MYSQL_HOST,MYSQL_USER,MYSQL_DATABASE,MYSQL_PASSWORD,MYSQL_PORT,MYSQL_ROOT_USER}