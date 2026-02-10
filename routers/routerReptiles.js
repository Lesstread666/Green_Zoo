import express from "express"
import { reptiles } from "../data/data.js"

const routerReptiles = express.Router()

routerReptiles.get("/", (req, res) => {
  res.render("pages/reptiles", { title: "Reptiles", reptiles })
})

export default routerReptiles