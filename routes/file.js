import express from "express"
import { getFile, getFiles, createFile, createFiles, deleteFile } from "../controllers/file.js"

const router = express.Router()

router.get('/', getFiles)
router.get('/:id', getFile)
router.post('/', createFile)
router.post('/multiple_files', createFiles)
router.delete('/:id', deleteFile)

export default router