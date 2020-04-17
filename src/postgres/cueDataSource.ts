import pg from './client'
import { v4 } from 'uuid'
import convertCase from '../util/caseConverter'

interface CueInput {
  location: string;
  time: string;
  emotionalState: string;
  otherPeople: boolean;
  precedingAction: string;
  habit: string;
}

const createCue = async (cueInput: CueInput): Promise<any> => {
  const {
    location,
    time,
    emotionalState,
    otherPeople,
    precedingAction,
    habit,
  } = cueInput

  const { rows } = await pg.query(`
      INSERT INTO cue (id, location, time, date, emotional_state, other_people, preceding_action, habit) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING *
    `,
    [v4(), location, time, new Date(), emotionalState, otherPeople, precedingAction, habit]
  )

  return convertCase(rows[0], 'snake', 'camel')
}

const getCues = async (): Promise<any> => {
  const { rows } = await pg.query('SELECT * from cue')

  return rows.map((row: object) => convertCase(row, 'snake', 'camel'))
}

export default {
  createCue,
  getCues,
}
