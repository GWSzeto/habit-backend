import { GraphQLScalarType } from 'graphql'
import { format, parse } from 'date-fns'

const Time = new GraphQLScalarType({
  name: 'Time',
  parseValue: (time: string): string => time,
  serialize: (time: string): string => time,
})

const resolvers = {
  Time,
}

export default resolvers
