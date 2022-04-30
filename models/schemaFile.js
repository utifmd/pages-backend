import mongoose from "mongoose"

const schemaFile = mongoose.Schema({
    name: { type: String, required: true, trim: true },
    type: { type: String },
    data: { type: String, required: true },
    createdAt: {
        type: Date,
        default: new Date()
    },
})

const SchemaFile = mongoose.model('SchemaFile', schemaFile)

export default SchemaFile