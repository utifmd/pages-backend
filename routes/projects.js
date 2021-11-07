import express from "express"
import { createProject, readProjects, updateProject, deleteProject } from "../controllers/projects.js"

const router = express.Router()

router.post('/', createProject)
router.get('/', readProjects)
router.patch('/:id', updateProject)
router.delete('/:id', deleteProject)

export default router