
import express from "express";
import { reptiles } from "../data/data.js";

const routerMammals = express.Router();

// Helper function to normalize names for URL slugs
function normalizeName(name) {
  return name.toLowerCase().replace(/\s+/g, " ").trim();
}