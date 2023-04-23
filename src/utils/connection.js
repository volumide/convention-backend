import mongoose from "mongoose"

const connection = async () => {
  console.log("connectiong")
  try {
    const connString = process.env.CONNECTION_STRING
    console.log(connString)
    await mongoose.connect(connString, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log("connection successful")
  } catch (error) {
    console.log(error)
  }
}

export default connection
