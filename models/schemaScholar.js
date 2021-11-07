import mongoose from "mongoose"

const schemaScholar = mongoose.Schema({
    title: String,
    desc: String,
    body: String,
    author: String,
    file: String,
    tags: [ String ],
    view: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const SchemaScholar = mongoose.model('SchemaScholar', schemaScholar)

export default SchemaScholar