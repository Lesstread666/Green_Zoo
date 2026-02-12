import express from "express";
import * as path from "path";
import { mammals } from "../data/data.js";

const routerMammals = express.Router();
const __dirname = path.resolve();

/* Helper: normalize names */
function normalizeName(name) {
  return name.toLowerCase().replace(/\s+/g, " ").trim();
}
routerMammals.get("/", (req, res) => {
    
  const animalName = req.query.name
    ? normalizeName(req.query.name)
    : null;

  let selectedMammal = null;
  let message = null;

  if (animalName) {
    selectedMammal = mammals.find(
      r => normalizeName(r.name) === animalName
    );

    if (!selectedMammal) {
      message = "Animal not found";
    }
  }

  res.render(
    path.join(__dirname, "/views/pages/mammals.ejs"),
    {
      pageTitle: selectedMammal ? selectedMammal.name : "Mammals",
      mammals,
      selectedMammal,
      activePage: "mammals",
      message
    }
  );
});

/* /mammals/:slug */
routerMammals.get("/:slug", (req, res) => {
  const slug = req.params.slug;
  const animalName = normalizeName(slug.replace(/-/g, " "));

  const selectedMammal = mammals.find(
    r => normalizeName(r.name) === animalName
  );

  const message = selectedMammal ? null : "Animal not found";

  res.render(
    path.join(__dirname, "/views/pages/mammals.ejs"),
    {
      pageTitle: selectedMammal ? selectedMammal.name : "Mammals",
      mammals,
      selectedMammal,
      activePage: "mammals",
      message
    }
  );
});
export default routerMammals;