import { GraphQLScalarType } from 'graphql'

const Time = new GraphQLScalarType({
  name: 'Time',
  parseValue: (time: string): string => time,
  serialize: (time: string): string => time,
})

const resolvers = {
  Time,
}

export default resolvers
