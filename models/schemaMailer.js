import mongoose from "mongoose"

const schemaMailer = mongoose.Schema({
    transporter: { 
        type: String, 
        default: 'smtp.ethereal.email' 
    },
    from: String,
    to: String,
    credential: String,
    active: false,
    createdAt: {
        type: Date,
        default: new Date()
    }
})