import express = require("express");
import {
  getAllBurgers,
  createBurger,
  devourBurger,
} from "../../controllers/burgersController";

const router = express.Router();

// redirect to /burgers
router.get("/", (req, res) => {
  res.redirect("/burgers");
});

// Get All Burgers
router.route("/burgers").get(getAllBurgers);

// // post route -> back to index
router.route("/burgers/create").post(createBurger);

// Devour /put buger and back to index
router.route("/burgers/:id").put(devourBurger);

export default router;
