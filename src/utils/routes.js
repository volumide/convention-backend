import { getUser, getUsers, saveUser, updateUser } from "../controller/users.controller.js"

const router = (app) => {
  app.post("/register", saveUser)
  app.put("/register/:id", updateUser)
  app.get("/member/:id", getUser)
  app.get("/members", getUsers)
}

export default router
