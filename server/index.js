import {typeDefs} from './typeDefs.js'
import {ApolloServer} from '@apollo/server'
import {resolvers} from './resolvers.js'
import {startStandaloneServer} from '@apollo/server/standalone'
import * as dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()
const DB = process.env.MONGODB
mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'apollo_test'
})

const server = new ApolloServer({
  typeDefs,
  resolvers
})

const {url} = await startStandaloneServer(server, {
  listen: {port: 4000}
})

console.log(`Server start: ${url}`)