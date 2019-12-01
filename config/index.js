"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const proxy_json_1 = __importDefault(require("./proxy.json"));
const lodash_1 = require("lodash");
var ModuleName;
(function (ModuleName) {
    ModuleName["proxy"] = "proxy";
})(ModuleName = exports.ModuleName || (exports.ModuleName = {}));
const ConfigMap = {
    [ModuleName.proxy]: proxy_json_1.default
};
const getConfig = (moduleName) => lodash_1.get(ConfigMap, `${moduleName}`, null);
exports.default = getConfig;
