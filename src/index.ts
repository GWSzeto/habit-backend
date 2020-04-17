import { ApolloServer } from 'apollo-server'
import { makeExecutableSchema } from 'graphql-tools'
import { rootTypeDefs, rootResolvers } from './graphql/root'
import { cueTypeDefs, cueResolvers } from './graphql/cue'
import { dateResolvers } from './graphql/date'
import { timeResolvers } from './graphql/time'
import { CueDataSource } from './postgres'
import dotenv from 'dotenv'
dotenv.config()

const schema = makeExecutableSchema({
	typeDefs: [
		rootTypeDefs,
		cueTypeDefs,
	],
	resolvers: [
		dateResolvers,
		timeResolvers,
		rootResolvers,
		cueResolvers,
	]
})

const server = new ApolloServer({
	schema,
	context: () => ({
		CueDataSource,
	})
})

server.listen().then(({ url }) => console.log(`listening on ${url}`))

// Hot Module Replacement
if (module.hot) {
	module.hot.accept();
	module.hot.dispose(() => server.stop())
}