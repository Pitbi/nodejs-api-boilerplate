const dataBase = require('../src/data-base')
const mongoose = require('mongoose')

beforeAll(async () => {
  await dataBase()
})

afterEach(async () => {
  await mongoose.connection.db.dropDatabase()
})