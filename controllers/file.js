import SchemaFile from "../models/schemaFile.js"
import mongoose from "mongoose"

export const getFiles = async (req, resp) => {
    try {
        const files = await SchemaFile.find()
        
        resp.status(200).json(files)
    } catch (error) {
        resp.status(404).json({message: error.message})
    }
}

export const getFile = async (req, resp) => {// const { name } = req.body
    const { id } = req.params
    try {
        if(!mongoose.Types.ObjectId.isValid(id)) 
            return resp.status(404).json({message: `No File with id ${id}`})
    
        const existingFile = await SchemaFile.findById(id)

        if(!existingFile) 
            return resp.status(404).json({message: `File doesn't exist.`})

        const base64Data = existingFile.data
        var img = Buffer.from(base64Data.split(',')[1], 'base64');
        resp.writeHead(200, {
            'Content-Type': 'image/png',
            'Content-Length': img.length 
        })
        resp.end(img)
    } catch (error) {
        resp.status(404).json({message: error.message})
    }
}

export const createFile = async (req, resp) => {
    const body = req.body
    const newFile = new SchemaFile(body)

    try {
        await newFile.save()

        resp.status(201).json(newFile)
    } catch (error) {
        resp.status(409).json({message: error.message})
    }
}

export const createFiles = async (req, resp) => {
    const body = req.body
    try {
        const files = await SchemaFile.insertMany(body)
        
        resp.status(201).json(files)
    } catch (error) {
        resp.status(409).json({message: error.message})
    }
}

export const deleteFile = async (req, resp) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) 
        return resp.status(404).json({message: `No File with id ${id}`})
    
    await SchemaFile.findByIdAndRemove(id)

    resp.json({message: 'File deleted successfully.'})
}