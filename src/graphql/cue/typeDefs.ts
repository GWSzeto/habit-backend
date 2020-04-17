import { gql } from 'apollo-server-lambda'

const typeDefs = gql`
  scalar Time
  scalar Date

  type Cue {
    id: ID!
    location: String!
    time: Time!
    date: Date!
    emotionalState: String!
    otherPeople: String!
    precedingAction: String!
    habit: String!
  }

  input CueInput {
    location: String!
    time: Time!
    emotionalState: String!
    otherPeople: String!
    precedingAction: String!
    habit: String!
  }

  extend type Mutation {
    createCue(input: CueInput!): Cue
  }

  extend type Query {
    getCues: [Cue]
  }
`

export default typeDefs