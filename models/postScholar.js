import mongoose from "mongoose"

const postSchema = mongoose.Schema({
    title: String,
    desc: String,
    body: String,
    author: String,
    file: String,
    tags: [String],
    view: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const PostScholar = mongoose.model('PostScholar', postSchema)

export default PostScholar