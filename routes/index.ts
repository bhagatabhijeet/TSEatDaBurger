import express = require("express");
import burgerRoutes from "./burgerRoutes";
const router = express.Router();

router.use("/", burgerRoutes);

export default router;
