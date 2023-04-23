import expectationModel from "../schemas/experience.schema.js"
import userModel from "../schemas/users.schema.js"

export const saveUser = async (req, res) => {
  try {
    const sendData = await userModel.create(req.body)
    return res.staus(200).json({ data: sendData, message: "success" })
  } catch (err) {
    console.log(err)
  }
}

export const updateUser = async (req, res) => {
  try {
    const updateUser = await userModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    return res.staus(200).json({ data: updateUser, message: "success" })
  } catch (error) {
    console.log(error)
  }
}

export const gettAllUsers = async (req, res) => {
  try {
    const allUsers = await userModel.find()
    return res.staus(200).json({ data: allUsers, message: "success" })
  } catch (error) {
    console.log(error)
  }
}

export const getAllexperince = async (req, res) => {
  try {
    const expectations = await expectationModel.find()
    return res.staus(200).json({ data: expectations, message: "success" })
  } catch (error) {
    console.log(error)
  }
}
