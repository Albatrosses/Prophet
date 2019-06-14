import request from 'request';

const queryResolver = {
	getListingWeiBo: (root: any, { count: number }) => {
		request({
			method: 'GET',
			uri: 'https://m.weibo.cn/',
			qs: {
				display: 0,
				retcode: 6102
			},
			headers: {
				'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
				'Upgrade-Insecure-Requests': 1,
				'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1'
			}
		}, (err, res, body) => {
			console.log('Jayce', body);
		});
		return {
			title: 'title'
		};
	}
};

export default queryResolver;