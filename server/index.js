import {typeDefs} from './apollo/typeDefs.js'
import {ApolloServer} from '@apollo/server'
import {resolvers} from './apollo/resolvers.js'
import {startStandaloneServer} from '@apollo/server/standalone'
// MONGOOSE CONNECTION start
// import * as dotenv from 'dotenv'
// import mongoose from 'mongoose'

// dotenv.config()
// const DB = process.env.MONGODB
// mongoose.connect(DB, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   dbName: 'apollo_test'
// })
// MONGOOSE CONNECTION end

const server = new ApolloServer({
  typeDefs,
  resolvers
})

const {url} = await startStandaloneServer(server, {
  listen: {port: 4000}
})

console.log(`Server start: ${url}`)