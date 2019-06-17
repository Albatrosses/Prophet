import request from 'request';
import cheerio from 'cheerio';
import { includes } from 'lodash';

const queryResolver = {
	getListingWeiBo: async (root: any, { count: number }) => {
		let requestPromise = new Promise((reslove: any, reject: any) => {
			const uri = 'http://xa.bendibao.com/';
			request({
				method: 'GET',
				uri,
				headers: {
					'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
					'Accept-Language': 'en-US,en;q=0.9',
					'Cache-Control': 'no-cache',
					'Connection': 'keep-alive',
					'cookie': 'Hm_lvt_bd3fb712ab8597f0e344c96f8da2ed58=1560608152,1560609175,1560609194,1560609199; security_session_verify=a4e317fd16e30812de009617d2c28b1e; Hm_lpvt_bd3fb712ab8597f0e344c96f8da2ed58=1560609328',
					'Host': 'xa.bendibao.com',
					'Pragma': 'no-cache',
					'Referer': 'https://www.google.com/',
					'Upgrade-Insecure-Requests': 1,
					'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.90 Safari/537.36'
				}
			}, (err, res, body) => {
				const $ = cheerio.load(body);
				const hotInfoListing = $('#stocknewsroll li>a').map((index: any, element: any) => {
					const href = JSON.parse(JSON.stringify(element.attribs)).href;
					const title = includes(href, 'http') ? href : uri + href;
					return {
						title,
						description: element.children[0].data
					}
				});
				reslove(Object.values(hotInfoListing));
			});
		});
		let hotInfoListing = await requestPromise;
		return hotInfoListing;
	}
};

export default queryResolver;