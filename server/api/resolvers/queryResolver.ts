import { proxyQuery } from "./proxy/query"

const queryResolver = {
	Query: {
		proxy: proxyQuery
	}
};

export default queryResolver;