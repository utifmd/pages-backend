import mongoose from "mongoose"

const schemaUser = mongoose.Schema({
    id: { type: String },
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    active: { 
        type: Boolean, 
        default: true
    },
    invalidAttempt: { 
        type: Number, 
        default: 0 
    },
    lastSignedIn: {
        type: Date,
        default: new Date()
    }
})

export default mongoose.model("User", schemaUser)