"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = __importDefault(require("request"));
var Headers;
(function (Headers) {
    Headers["contentType"] = "content-type";
})(Headers = exports.Headers || (exports.Headers = {}));
exports.requestHttp = (option, useCookie = false) => {
    request_1.default.defaults({ jar: useCookie });
    return new Promise((reslove, reject) => {
        request_1.default(option, (err, res) => {
            if (err) {
                reject(err);
                return;
            }
            reslove(res);
            return;
        });
    });
};
