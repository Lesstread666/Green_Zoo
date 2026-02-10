import express from "express"
import * as path from "path"
import { reptiles } from "../data/data.js"

const routerReptiles = express.Router()
const __dirname = path.resolve()

routerReptiles.get("/", (req, res) => {
  res.render(
    path.join(__dirname, "/views/pages/reptiles.ejs"),
    {
      pageTitle: "Reptiles | Green Zoo",
      activePage: "reptiles",
      reptiles
    }
  )
})

export default routerReptiles