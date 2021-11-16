import SchemaUser from "../models/schemaUser.js"
import bcryptjs from "bcryptjs"

export const signUp = async (req, resp) => {
    const { name, email, password } = req.body

    try {
        const existingUser = await SchemaUser.findOne({ email })
        const hashedpassword = await bcryptjs.hash(password, 12)
        const hashedid = await bcryptjs.hash(email, 12)
        
        if(existingUser)
            return resp.status(404).json({message: `User already exists.`}) 
        
        const result = await SchemaUser.create({ id: hashedid, name: name, email: email, password: hashedpassword })
        
        resp.status(200).json({ result })
    } catch (error) {
        resp.status(404).json({message: `Something went wrong.`})
    }
}

export const signIn = async (req, resp) => {
    const { email, password } = req.body

    try {
        const existingUser = await SchemaUser.findOne({ email })

        if(!existingUser) 
            return resp.status(404).json({message: `User doesn't exist.`})

        // const activeUser = existingUser.invalidAttempt <= 5

        // if(!activeUser)
        //     return resp.status(404).json({message: `User was blocked.`})

        const isPasswordCorrect = await bcryptjs.compare(password, existingUser.password)

        if(!isPasswordCorrect) {
            await SchemaUser.findOneAndUpdate({"email": email}, { $inc: { 
                "invalidAttempt": 1
            }})

            return resp.status(403).json({message: `Invalid creadentials.`})
        }
        
        resp.status(200).json({result: existingUser})
    } catch (error) {

        resp.status(404).json({message: `Something went wrong.`})
    }
}