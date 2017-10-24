const DB_NAME = process.env.PGDATABASE || 'spend'
const DB_USERNAME = process.env.PGUSER || 'postgres'
const DB_PASSWORD = process.env.PGPASSWORD
const DB_ADDRESS = process.env.PGHOST || 'localhost'
const DB_PORT = process.env.PGPORT || 5432

const DB_ENDPOINT = encodeURI(
  `postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_ADDRESS}:${DB_PORT}/${DB_NAME}`
)

export {
  DB_ENDPOINT,
  DB_USERNAME
}
