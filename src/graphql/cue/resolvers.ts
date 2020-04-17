
interface CueInput {
  location: string;
  time: string;
  emotionalState: string;
  otherPeople: boolean;
  precedingAction: string;
  habit: string;
}

interface Cue {
  id: string;
  location: string;
  time: string;
  date: string;
  emotionalState: string;
  otherPeople: boolean;
  precedingAction: string;
  habit: string;
}

const createCue = async (_: object, { input }: { input: CueInput }, { CueDataSource }: { CueDataSource: any }): Promise<Cue> =>
  CueDataSource.createCue(input)

const getCues = async (_: object, __: object, { CueDataSource }: { CueDataSource: any }): Promise<Cue[]> =>
  CueDataSource.getCues()

const resolvers = {
  Query: {
    getCues,
  },
  Mutation: {
    createCue,
  }
}

export default resolvers