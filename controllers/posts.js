import PostScholar from "../models/postScholar.js"
import mongoose from "mongoose"

export const getPosts = async (req, resp) => {
    try {
        const posts = await PostScholar.find()
        
        resp.status(200).json(posts)
    } catch (error) {
        resp.status(404).json({message: error.message})
    }
}

export const createPosts = async (req, resp) => {
    const body = req.body
    const newPost = new PostScholar(body)

    try {
        await newPost.save()

        resp.status(201).json(newPost)
    } catch (error) {
        resp.status(409).json({message: error.message})
    }
}

export const updatePosts = async (req, resp) => {
    const { id: _id } = req.params
    const body = req.body

    if(!mongoose.Types.ObjectId.isValid(_id)) 
        return resp.status(404).send(`No post with id ${_id}`)
    
    const updated = await PostScholar.findByIdAndUpdate(_id, body, { new: true })

    resp.json(updated)
}

export const deletePosts = async (req, resp) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) 
        return resp.status(404).send(`No post with id ${id}`)
    
    await PostScholar.findByIdAndRemove(id)

    resp.json({message: 'Post deleted successfully.'})
}