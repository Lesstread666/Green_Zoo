import express from "express";
import * as path from "path";
import { birds } from "../data/data.js";

const routerBirds = express.Router();
const __dirname = path.resolve();

/* Helper: normalize names */
function normalizeName(name) {
  return name.toLowerCase().replace(/\s+/g, " ").trim();
}
routerBirds.get("/", (req, res) => {
      
  const animalName = req.query.name
    ? normalizeName(req.query.name)
    : null;

  let selectedBird = null;
  let message = null;

  if (animalName) {
    selectedBird = birds.find(
      r => normalizeName(r.name) === animalName
    );

    if (!selectedBird) {
      message = "Animal not found";
    }
  }

  res.render(
    path.join(__dirname, "/views/pages/birds.ejs"),
    {
      pageTitle: selectedBird ? selectedBird.name : "Birds",
      birds,
      selectedBird,
      activePage: "birds",
      message
    }
  );
});

/* /birds/:slug */
routerBirds.get("/:slug", (req, res) => {
  const slug = req.params.slug;
  const animalName = normalizeName(slug.replace(/-/g, " "));

  const selectedBird = birds.find(
    r => normalizeName(r.name) === animalName
  );

  const message = selectedBird ? null : "Animal not found";

  res.render(
    path.join(__dirname, "/views/pages/birds.ejs"),
    {
      pageTitle: selectedBird ? selectedBird.name : "Birds",
      birds,
      selectedBird,
      activePage: "birds",
      message
    }
  );
});
export default routerBirds;