import express from "express"
import * as path from "path"
import "dotenv/config"

console.log(process.env.PORT)

const app = express()
const port = process.env.PORT;
const __dirname = path.resolve()

// Routers
import homeRouter from "./routers/routerHome.js"
import mammalsRouter from "./routers/routerMammals.js"
import reptileRouter from "./routers/routerReptiles.js"
import birdsRouter from "./routers/routerBirds.js"
import aboutRouter from "./routers/routerAbout.js"

app.set("view engine", "ejs")
app.use(express.static("public"))

//Home Routes
app.use("/home", homeRouter)

// Reptiles Routes
app.use("/reptiles", reptileRouter)

// Mammals Routes
app.use("/mammals", mammalsRouter);

// Birds Routes
app.use("/birds", birdsRouter);

// About us Routes
app.use("/about-us", aboutRouter);

app.get("/", (req, res) => {
    res.redirect("/home");
});

app.listen(port, () => console.log(`Listening on the port ${port}`))

