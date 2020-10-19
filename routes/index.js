"use strict";
exports.__esModule = true;
var express = require("express");
var burgerRoutes_1 = require("./burgerRoutes");
var router = express.Router();
router.use("/", burgerRoutes_1["default"]);
exports["default"] = router;
