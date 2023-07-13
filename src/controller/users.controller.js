import userModel from "../schemas/users.schema.js"

export const saveUser = async (req, res) => {
  try {
    req.body["created_at"] = new Date()
    const findUser = await userModel.findOne({ email: req.body.email })

    if (findUser)
      return res.status(409).json({
        message: "fail",
        data: {
          error: "user already exist"
        }
      })
    const sendData = await userModel.create(req.body)
    return res.status(200).json({ data: sendData, message: "success" })
  } catch (err) {
    console.log(err)
  }
}

export const updateUser = async (req, res) => {
  try {
    const updateUser = await userModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    return res.status(200).json({ data: updateUser, message: "success" })
  } catch (error) {
    console.log(error)
  }
}

export const getUsers = async (req, res) => {
  try {
    const allUsers = await userModel.find()
    return res.status(200).json({ data: allUsers, message: "success" })
  } catch (error) {
    console.log(error)
  }
}

export const getUser = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id)
    return res.status(200).json({ data: user, message: "success" })
  } catch (error) {
    console.log(error)
  }
}
