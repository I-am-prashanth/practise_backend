import mongoose from "mongoose";
import "dotenv/config"
console.log(process.env.PORT)
const connectDB=async ()=>{

    console.log("this is connect page");

    const name="vediotube";
    try {
        // console.log("trying");
       const conn_to_DB= await mongoose.connect(process.env.URL)
        console.log(`sucessfully connect to database!!..${conn_to_DB.connection.host}`)
    } catch (error) {

        console.log("MONGOOSE connection error",error)
        process.exit(1)
    }
    console.log("this is exit of try")
}

connectDB();

export default connectDB


