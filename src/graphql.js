const { ApolloServer } = require('apollo-server-lambda')
const schema = require('./graphql')
const { CueDataSource } = require('./postgres')
require('dotenv').config()

const server = new ApolloServer({
	schema,
	context: () => ({
		CueDataSource,
	})
})

exports.graphqlHandler = server.createHandler()