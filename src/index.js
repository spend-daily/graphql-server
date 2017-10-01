import {
  createPostGraphQLSchema,
  withPostGraphQLContext
} from 'postgraphql'

export default function handleGraphqlRequest(event, context, callback) {
  callback('Hello world')
}
