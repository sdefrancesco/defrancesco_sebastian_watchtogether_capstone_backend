import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        first: String,
        last: String
    }
}, {timestamps: true})

const User = mongoose.model('User', userSchema)

export default User