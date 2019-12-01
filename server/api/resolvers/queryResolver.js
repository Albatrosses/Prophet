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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importStar(require("./../../../config/"));
const helper_1 = __importDefault(require("../helper"));
const queryResolver = {
    Query: {
        proxy: () => __awaiter(void 0, void 0, void 0, function* () {
            const ProxyDomain = helper_1.default.getModule(config_1.ModuleName.proxy);
            const { domain, loginPath, mainPath, username, password } = config_1.default(config_1.ModuleName.proxy);
            const proxy = new ProxyDomain(domain, loginPath, mainPath, username, password);
            const result = yield proxy.login();
            // TODO: need to add entry logic
            // await proxy.entry();
            return result;
        })
    }
};
exports.default = queryResolver;
