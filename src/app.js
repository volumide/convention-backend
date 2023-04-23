import express from "express"
import dotenv from "dotenv"
import connection from "./utils/connection.js"
dotenv.config()
const PORT = process.env.PORT
const app = express()

app.use(express.json())

app.listen(PORT, () => {
  console.log(`app is listening to port ${PORT}`)
})

connection()
