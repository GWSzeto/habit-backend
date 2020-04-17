import { ApolloServer } from 'apollo-server-lambda'
import { makeExecutableSchema } from 'graphql-tools'
import { rootTypeDefs, rootResolvers } from './src/graphql/root'
import { cueTypeDefs, cueResolvers } from './src/graphql/cue'
import { dateResolvers } from './src/graphql/date'
import { timeResolvers } from './src/graphql/time'
import { CueDataSource } from './src/postgres'
import dotenv from 'dotenv'
dotenv.config()

console.log("user: ", process.env.USER)
console.log("database: ", process.env.DATABASE)

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
	}),
	playground: {
		endpoint: "/dev/graphql"
	}
})

exports.graphqlHandler = server.createHandler({
	cors: {
		origin: '*',
		credentials: true,
	}
})