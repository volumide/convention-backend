import express from "express"
import dotenv from "dotenv"
import connection from "./utils/connection.js"
import router from "./utils/routes.js"
import cors from "cors"
dotenv.config()
const PORT = process.env.PORT
const app = express()

app.use(express.json())
app.use(cors({ origin: "*" }))

const apiRouter = express.Router()
router(apiRouter)
app.use("/api", apiRouter)

connection()
app.listen(PORT, () => {
  console.log(`app is listening to port ${PORT}`)
})
