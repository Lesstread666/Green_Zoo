import express from "express";
import * as path from "path";
import { mammals, reptiles, birds } from "../data/data.js";

const routerHome = express.Router();
const __dirname = path.resolve();

/* Helper */
function normalizeName(name) {
    return name.toLowerCase().replace(/\s+/g, " ").trim();
}

/* HOME – intro */
routerHome.get("/", (req, res) => {
    res.render(
        path.join(__dirname, "/views/pages/index.ejs"),
        {
            pageTitle: "Green Zoo",
            mammals,
            reptiles,
            birds,
            selectedAnimal: null,
            activePage: "home",
            message: null
        }
    );
});

/* HOME – selected animal */
routerHome.get("/:group/:slug", (req, res) => {
    const { group, slug } = req.params;
    const animalName = normalizeName(slug.replace(/-/g, " "));

    let selectedAnimal = null;

    if (group === "mammals") {
        selectedAnimal = mammals.find(a => normalizeName(a.name) === animalName);
    } else if (group === "reptiles") {
        selectedAnimal = reptiles.find(a => normalizeName(a.name) === animalName);
    } else if (group === "birds") {
        selectedAnimal = birds.find(a => normalizeName(a.name) === animalName);
    }

    const message = selectedAnimal ? null : "Animal not found";

    res.render(
        path.join(__dirname, "/views/pages/index.ejs"),
        {
            pageTitle: selectedAnimal ? selectedAnimal.name : "Green Zoo",
            mammals,
            reptiles,
            birds,
            selectedAnimal,
            activePage: "home",
            message
        }
    );
});

export default routerHome;
