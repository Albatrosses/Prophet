"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProxyDomain_1 = __importDefault(require("./proxy/ProxyDomain"));
const config_1 = require("../../../config");
const lodash_1 = require("lodash");
const helperMap = {
    [config_1.ModuleName.proxy]: ProxyDomain_1.default
};
class HelperMaps {
    constructor() { }
    getModule(moduleName) {
        return lodash_1.get(helperMap, `${moduleName}`, null);
    }
}
exports.default = new HelperMaps();
