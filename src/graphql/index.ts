import { makeExecutableSchema } from 'graphql-tools'

// types and resolvers
import { rootTypeDefs, rootResolvers } from './root'
import { cueTypeDefs, cueResolvers } from './cue'

export default makeExecutableSchema({
  typeDefs: [
    rootTypeDefs,
    cueTypeDefs,
  ],
  resolvers: [
    rootResolvers,
    cueResolvers
  ]
});
