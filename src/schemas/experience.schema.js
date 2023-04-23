import mongoose from "mongoose"

const schema = mongoose.Schema({
  expectation: String
})

const expectationModel = mongoose.model("Users", schema)
export default expectationModel
