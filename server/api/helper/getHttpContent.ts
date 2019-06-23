import request from 'request';
import cheerio from 'cheerio';

export const getDocument = ({
  uri,
  method,
  headers,
	qs = {}
}) => {
  return new Promise((reslove: any, reject: any) => {
		request({
			method,
			uri,
			headers,
			qs
		}, (err, res, body) => {
			if (err) {
				reject(err);
				return false
			}
			const $ = cheerio.load(body);
			reslove($);
		});
  });
};