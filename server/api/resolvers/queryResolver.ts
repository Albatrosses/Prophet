import { getDocument } from '../helper/getHttpContent';
import { includes } from 'lodash';

const queryResolver = {
	Query: {
		getListingBenDiBao: async (root: any, { expandArray }) => {
			const uri = 'http://xa.bendibao.com/';
			const $: any = await getDocument({
				uri,
				method: 'GET',
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
			});
			const hotInfoListing = $('#stocknewsroll li>a').map((index: any, element: any) => {
				const href = JSON.parse(JSON.stringify(element.attribs)).href;
				const link = includes(href, 'http') ? href : uri + href;
				return {
					link,
					point: element.children[0].data
				}
			});
			const result = Object.values(hotInfoListing).filter(({link, point}) => {
				if (!link || !point) {
					return false;
				}
				return true;
			}).map(({link, point}, index) => {
				return {
					link,
					point,
					expand: includes(expandArray, index)
				}
			});
			return result;
		}
	},
	ListingBenDiBao: {
		detail: async (root: any) => {
			const { link, expand } = root;
			if (!expand) {
				return null;
			}
			const $: any = await getDocument({
				uri: link,
				method: 'GET',
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
			});
			const title = $('.title.daoyu strong').text();
			const date = $('.article-info .time').text().split('：')[1];
			const lead = $('.leading p').text().split('：')[1];
			const content = $('.content').html();
			return {
				title,
				date,
				lead,
				content
			};
		}
	}
};

export default queryResolver;