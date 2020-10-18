"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql_1 = require("mysql");
var conconfig = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burgers_db",
};
var connection;
if (process.env.JAWSDB_URL) {
    connection = mysql_1.createConnection(process.env.JAWSDB_URL);
}
else {
    connection = mysql_1.createConnection(conconfig);
}
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});
exports.default = connection;
