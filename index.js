import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"

import routeFile from "./routes/file.js"
import routeScholars from "./routes/scholars.js"
import routeProjects from "./routes/projects.js"
import routeAuth from "./routes/auth.js"

const app = express()
dotenv.config()

const { DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_CLUSTERS, CLIENT_ORIGIN, PORT } = process.env
let CONNECTION_URL = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT},${DB_CLUSTERS}` //`mongodb://${DB_HOST}:${DB_PORT}`  

app.use(express.json({ limit: '30mb', extended: true })) 
app.use(express.urlencoded({ limit: '30mb', extended: true }))
  
app.use(cors({ origin: '*' || CLIENT_ORIGIN }))

app.use('/file', routeFile)
app.use('/scholars', routeScholars)
app.use('/projects', routeProjects)  
app.use('/auth', routeAuth)  

app.get('/', (req, resp) => {
  resp.send("MERN Stack REST API")
})
const connectionConfig = { 
  useNewUrlParser: true, 
  useUnifiedTopology: true
}
mongoose
  .connect(CONNECTION_URL, connectionConfig)
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch((error) => console.log(error.message))