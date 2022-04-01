import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import userRoutes from './routes/userRoutes.js'

const app = express()
dotenv.config()
connectDB()

app.use(express.json())

app.use('/api/users', userRoutes)

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
