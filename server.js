import express from "express"
import router from "./config/router.js"
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(router)
app.listen(8080, ()=>console.log("Listening on port 8080"))