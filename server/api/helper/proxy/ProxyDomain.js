"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const httpHelper_1 = require("../common/httpHelper");
const lodash_1 = require("lodash");
class ProxyDomain {
    constructor(domain, loginPath, mainPath, username, password) {
        this.domain = domain;
        this.loginPath = loginPath;
        this.mainPath = mainPath;
        this.username = username;
        this.password = password;
    }
    login() {
        return __awaiter(this, void 0, void 0, function* () {
            const uri = `${this.domain}${this.loginPath}`;
            const res = yield httpHelper_1.requestHttp({
                uri,
                method: "post",
                qs: {
                    email: this.username,
                    passwd: this.password
                }
            }, true);
            const result = JSON.parse(lodash_1.get(res, "body", {}));
            return {
                message: unescape(lodash_1.get(result, "msg")),
                status: !!lodash_1.get(res, "ret", false)
            };
        });
    }
    entry() {
        return __awaiter(this, void 0, void 0, function* () {
            return false;
        });
    }
}
exports.default = ProxyDomain;
