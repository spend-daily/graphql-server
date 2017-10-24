import {
  createPostGraphQLSchema,
  withPostGraphQLContext
} from 'postgraphql'
import { Pool } from 'pg-pool'

import {
  DB_ENDPOINT,
  DB_USERNAME
} from './config'

const postgraphQLSchema = await createPostGraphQLSchema(DB_ENDPOINT)
const pool = new Pool()

export default function handleGraphqlRequest(event, context, callback) {
  const result = await withPostGraphQLContext(
    {
      pgPool: pool,
      pgDefaultRole: DB_USERNAME,
    },
    async context => {
      return await graphql(
        postgraphQLSchema,
        {},
        null,
        { ...context },
        {},
        'test',
      )
    }
  )

  callback(null, result)
}
