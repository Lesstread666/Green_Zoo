import express from "express"
import { reptiles } from "../data/data.js"

const router = express.Router()

router.get("/", (req, res) => {
  res.render("pages/reptiles", { title: "Reptiles", reptiles })
})

export default router

