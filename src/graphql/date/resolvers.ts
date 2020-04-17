import { GraphQLScalarType } from 'graphql'
import { format } from 'date-fns'

const Date = new GraphQLScalarType({
  name: 'Date',
  parseValue: (date: string): string => date,
  serialize: (date: Date): string => format(date, 'yyyy-MM-dd')
})

const resolvers = {
  Date,
}

export default resolvers
