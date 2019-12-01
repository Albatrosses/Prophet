import getConfig, { ModuleName } from './../../../config/';
import helperMaps from "../helper";

const queryResolver = {
	Query: {
		proxy: async () => {
			const ProxyDomain = helperMaps.getModule(ModuleName.proxy);
			const { domain, loginPath, mainPath, username, password } = getConfig(ModuleName.proxy);
			const proxy = new ProxyDomain(domain, loginPath, mainPath, username, password);
			const result = await proxy.login();
			// TODO: need to add entry logic
			// await proxy.entry();
			return result;
		}
	}
};

export default queryResolver;