import { Pool } from 'pg'

const pool = new Pool({
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.host,
  database: process.env.DATABASE,
  port: parseInt(process.env.PORT || '5432')
})

export default {
  query: async (queryString: string, params?: Array<any>): Promise<any> => pool.query(queryString, params)
}