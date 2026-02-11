import express from "express";
import { mammals } from "../data/data.js";

const routerMammals = express.Router();
console.log("Mammals page", routerMammals)
// Helper function
function normalizeName(name) {
  return name.toLowerCase().replace(/\s+/g, " ").trim();
}

// Full mammals list + query ?name=
routerMammals.get("/", (req, res) => {
    console.log("Mammals route working");
  
  const animalName = req.query.name ? normalizeName(req.query.name) : null;
  let selectedMammal = null;
  let message = null;

  if (animalName) {
    selectedMammal = mammals.find(m => normalizeName(m.name) === animalName);
    if (!selectedMammal) {
      message = "Animal not found";
    }
  }

  res.render("pages/mammals", {
    pageTitle: selectedMammal ? selectedMammal.name : "Mammals",
    mammals,
    selectedMammal,
    activePage: "mammals",
    message
  });
});

// Dynamic route /mammals/:slug
routerMammals.get("/:slug", (req, res) => {
  const slug = req.params.slug;
  const animalName = normalizeName(slug.replace(/-/g, " "));

  const selectedMammal = mammals.find(m => normalizeName(m.name) === animalName);
  let message = null;

  if (!selectedMammal) {
    message = "Animal not found";
  }

  res.render("pages/mammals", {
    pageTitle: selectedMammal ? selectedMammal.name : "Mammals",
    mammals,
    selectedMammal,
    activePage: "mammals",
    message
  });
});

export default routerMammals;
