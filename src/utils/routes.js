import { getUsers, saveUser, updateUser } from "../controller/users.controller.js"

const router = (app) => {
  app.post("/register", saveUser)
  app.put("/register/:id", updateUser)
  app.get("/register", getUsers)
}

export default router
