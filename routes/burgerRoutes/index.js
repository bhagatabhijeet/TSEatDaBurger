"use strict";
exports.__esModule = true;
var express = require("express");
var burgersController_1 = require("../../controllers/burgersController");
var router = express.Router();
// redirect to /burgers
router.get("/", function (req, res) {
    res.redirect("/burgers");
});
// Get All Burgers
router.route("/burgers").get(burgersController_1.getAllBurgers);
// // post route -> back to index
router.route("/burgers/create").post(burgersController_1.createBurger);
// Devour /put buger and back to index
router.route("/burgers/:id").put(burgersController_1.devourBurger);
exports["default"] = router;
