import mongoose from "mongoose"

const schemaUser = mongoose.Schema({
    id: { type: String },
    name: { type: String, require: true },
    email: { type: String, require: true },
    picture: {type: String, default: "https://avatars.githubusercontent.com/u/16291551?s=400&u=c0b02c25fef325be78f7a1faca541f44120fb591&v=4"}, 
    bio: {type: String, default: "“Seorang pemuda tua ophiuchus“"},
    field: {type: String, default: "Software Engineer"},
    resume: {type: String, default: "https://www.canva.com/design/DAEwDqEOVBQ/E4W4OrSCSwUxUQLkhApu7Q/view?utm_content=DAEwDqEOVBQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"},
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