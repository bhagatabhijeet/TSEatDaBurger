import express = require("express");
import exphb from "express-handlebars";
import router from "./routes";

const PORT = process.env.PORT || 8000;
const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphb({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(router);

app.listen(PORT, function () {
  console.log("Listening on port:%s", PORT);
  console.log(__dirname + "/public");
});
