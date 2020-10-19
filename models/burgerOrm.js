"use strict";
exports.__esModule = true;
var orm_1 = require("../config/orm");
var burger = {
    all: function (cb) {
        orm_1["default"].all("burgers", function (res) {
            cb(res);
        });
    },
    create: function (name, cb) {
        orm_1["default"].create("burgers", [
            "burger_name", "devoured"
        ], [
            name, false
        ], cb);
    },
    update: function (id, cb) {
        var condition = "id=" + id;
        orm_1["default"].update("burgers", {
            devoured: true
        }, condition, cb);
    }
};
exports["default"] = burger;
