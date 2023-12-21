import express from 'express'
const app = express()
import cors from 'cors'
import router from './routes/route.js'
import { Connection } from './database/db.js'

app.use(cors())
Connection()
const PORT = process.env.PORT || 8000
app.use(express.json())
app.use(router)

app.listen(8000 , () => {
    console.log("Listening at port number" ,PORT)
})