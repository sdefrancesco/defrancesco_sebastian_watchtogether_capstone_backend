import mongoose from "mongoose";

const LinkSchema = mongoose.Schema({
    link: String,
    user: {type: mongoose.SchemaTypes.ObjectId, ref: 'User'}
}, {timestamps: true})

const Link = mongoose.model('Link', LinkSchema)

export default Link