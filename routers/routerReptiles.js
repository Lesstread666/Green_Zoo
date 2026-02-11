import express from "express";
import * as path from "path";
import { reptiles } from "../data/data.js";

const routerReptiles = express.Router();
const __dirname = path.resolve();

/* Helper: normalize names */
function normalizeName(name) {
  return name.toLowerCase().replace(/\s+/g, " ").trim();
}
routerReptiles.get("/", (req, res) => {
  const animalName = req.query.name
    ? normalizeName(req.query.name)
    : null;

  let selectedReptile = null;
  let message = null;

  if (animalName) {
    selectedReptile = reptiles.find(
      r => normalizeName(r.name) === animalName
    );

    if (!selectedReptile) {
      message = "Animal not found";
    }
  }

  res.render(
    path.join(__dirname, "/views/pages/reptiles.ejs"),
    {
      pageTitle: selectedReptile ? selectedReptile.name : "Reptiles",
      reptiles,
      selectedReptile,
      activePage: "reptiles",
      message
    }
  );
});

/* /reptiles/:slug */
routerReptiles.get("/:slug", (req, res) => {
  const slug = req.params.slug;
  const animalName = normalizeName(slug.replace(/-/g, " "));

  const selectedReptile = reptiles.find(
    r => normalizeName(r.name) === animalName
  );

  const message = selectedReptile ? null : "Animal not found";

  res.render(
    path.join(__dirname, "/views/pages/reptiles.ejs"),
    {
      pageTitle: selectedReptile ? selectedReptile.name : "Reptiles",
      reptiles,
      selectedReptile,
      activePage: "reptiles",
      message
    }
  );
});
export default routerReptiles;