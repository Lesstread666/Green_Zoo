
import express from "express";
import { reptiles } from "../data/data.js";

const routerReptiles = express.Router();

// Helper function to normalize names for URL slugs
function normalizeName(name) {
  return name.toLowerCase().replace(/\s+/g, " ").trim();
}

// Full reptiles list + query ?name=...
routerReptiles.get("/", (req, res) => {
  const animalName = req.query.name ? normalizeName(req.query.name) : null;
  let selectedReptile = null;
  let message = null;

  if (animalName) {
    selectedReptile = reptiles.find(r => normalizeName(r.name) === animalName);
    if (!selectedReptile) {
      message = "Animal not found";
    }
  }

  res.render("pages/reptiles", {
    pageTitle: selectedReptile ? selectedReptile.name : "Reptiles",
    reptiles,
    selectedReptile,
    activePage : "reptiles",
    message
  });
});

// Dynamic route for /reptiles/:slug
routerReptiles.get("/:slug", (req, res) => {
  const slug = req.params.slug;
  const animalName = normalizeName(slug.replace(/-/g, " "));

  const selectedReptile = reptiles.find(r => normalizeName(r.name) === animalName);
  let message = null;

  if (!selectedReptile) {
    message = "Animal not found";
  }

  res.render("pages/reptiles", {
    pageTitle: selectedReptile ? selectedReptile.name : "Reptiles",
    reptiles,
    selectedReptile,
    activePage : "reptiles",
    message
  });
});

export default routerReptiles;


