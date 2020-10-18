"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var orm_1 = __importDefault(require("../config/orm"));
var burger = {
    all: function (cb) {
        orm_1.default.all("burgers", function (res) {
            cb(res);
        });
    },
    create: function (name, cb) {
        orm_1.default.create("burgers", [
            "burger_name", "devoured"
        ], [
            name, false
        ], cb);
    },
    update: function (id, cb) {
        var condition = "id=" + id;
        orm_1.default.update("burgers", {
            devoured: true
        }, condition, cb);
    }
};
exports.default = burger;
