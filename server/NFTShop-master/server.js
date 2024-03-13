import express from "express"
import router from "./config/router.js"
import cors from "cors"
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  }))
app.use(router)
app.listen(8080, ()=>console.log("Listening on port 8080"))