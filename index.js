import express from "express"
import * as path from "path"
import "dotenv/config"

console.log(process.env.PORT)

const app = express()
const port = process.env.PORT;
const __dirname = path.resolve()

// Routers
import reptileRouter from "./routers/routerReptiles.js"
import aboutRouter from "./routers/aboutRouter.js"

app.set("view engine", "ejs")
app.use(express.static("public"))

// Reptiles Routes
app.use("/reptiles", reptileRouter)
app.use("/about-us", aboutRouter)

app.get("/", (req, res) => {
    res.render(path.join(__dirname, "/views/pages/index.ejs"),
        {
             pageTitle: "Green Zoo",
             activePage: "Home"
        })
})


app.listen(port, () => console.log(`Listening on the port ${port}`))

