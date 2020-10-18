"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var express_handlebars_1 = __importDefault(require("express-handlebars"));
var routes_1 = __importDefault(require("./routes"));
var PORT = process.env.PORT || 8000;
var app = express();
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));
// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", express_handlebars_1.default({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(routes_1.default);
app.listen(PORT, function () {
    console.log("Listening on port:%s", PORT);
    console.log(__dirname + "/public");
});
