import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

const app = express()
dotenv.config()
connectDB()

app.get('/', (req, res) => {
  res.send('API is runninasdg...')
})

app.listen(
  process.env.PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
      .yellow.bold
  )
)
