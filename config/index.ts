import proxy from "./proxy.json";
import { get } from "lodash";

export enum ModuleName {
  proxy = "proxy"
}

const ConfigMap = {
  [ModuleName.proxy]: proxy
};

const getConfig = (moduleName: ModuleName): any => get(ConfigMap, `${moduleName}`, null);

export default getConfig;
