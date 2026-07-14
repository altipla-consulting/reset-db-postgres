import postgres from 'postgres'
import dotenv from 'dotenv'
import argv from 'minimist'

dotenv.config()

let args = argv(process.argv.slice(2))
let url = args.url || process.env.DATABASE_URL
if (!url) {
  throw new Error('define DATABASE_URL environment variable or --url argument')
}

let u = new URL(url)
let dbname = '`' + u.pathname.slice(1) + '`'
u.pathname = '/postgres'

let connection = postgres(u.toString())

try {
  await connection`DROP DATABASE IF EXISTS ${dbname}`
  await connection`CREATE DATABASE ${dbname}`
} finally {
  await connection.end()
}
