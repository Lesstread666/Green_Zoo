import express from "express";
import * as path from "path";
import team from "../data/about-us-data.js";

const aboutRouter = express.Router();
const __dirname = path.resolve()

aboutRouter.get("/", (req, res) => {
    res.render(path.join(__dirname, "/views/pages/about-us"),
        {
            pageTitle: "About us",
            activePage: "about",
            team
        }
    )
})

export default aboutRouter