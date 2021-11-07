import SchemaProject from "../models/schemaProject.js"
import mongoose from "mongoose"

export const readProjects = async (req, resp) => {
    try {
        const projects = await SchemaProject.find()
        
        resp.status(200).json(projects)
    } catch (error) {
        resp.status(404).json({message: error.message})
    }
}

export const createProject = async (req, resp) => {
    const body = req.body
    const newPost = new SchemaProject(body)

    try {
        await newPost.save()

        resp.status(201).json(newPost)
    } catch (error) {
        resp.status(409).json({message: error.message})
    }
}

export const updateProject = async (req, resp) => {
    const { id: _id } = req.params
    const body = req.body

    if(!mongoose.Types.ObjectId.isValid(_id)) 
        return resp.status(404).send(`No post with id ${_id}`)
    
    const updated = await SchemaProject.findByIdAndUpdate(_id, body, { new: true })

    resp.json(updated)
}

export const deleteProject = async (req, resp) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) 
        return resp.status(404).send(`No project with id ${id}`)
    
    await SchemaProject.findByIdAndRemove(id)

    resp.json({message: 'Post deleted successfully.'})
}