"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var burgerRoutes_1 = __importDefault(require("./burgerRoutes"));
var router = express.Router();
router.use("/", burgerRoutes_1.default);
exports.default = router;
