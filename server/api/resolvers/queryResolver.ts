import httpMethod from "../helper/httpMethod";

const queryResolver = {
	Query: {
		githubCommitList: async () => {
			const url = "https://github.com/Albatrosses/Prophet/commits/master";
			const result: any = await httpMethod.getDocument(url, ".commits-list-item .commit-title .message");
			
			return result;
		}
	}
};

export default queryResolver;