import { ModuleName } from "../../../../config";
import helperMaps from "../../helper";

export const proxyQuery = async () => {
  const proxy = helperMaps.getModule(ModuleName.proxy);
	const result = await proxy.query();
	return result;
}