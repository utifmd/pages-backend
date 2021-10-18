import PostScholar from "../models/postScholar.js"

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