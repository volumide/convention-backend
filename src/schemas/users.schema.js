import mongoose from "mongoose"

const schema = mongoose.Schema({
  name: String,
  assembly: String,
  email: String,
  contact: String,
  gender: String,
  class: String,
  present: { type: String, default: false },
  expectation: String
})

const userModel = mongoose.model("Users", schema)
export default userModel
