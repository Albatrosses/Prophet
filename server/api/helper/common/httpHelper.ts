import request from "request";
import cheerio from "cheerio";

export enum HttpStatusCode {
  ok = 200,
  bad = 400
};

export enum HttpMethod {
  GET = "get",
  POST = "post"
};

export enum Headers {
  contentType = "content-type",
  cookie = "cookie"
};

type THeaders = {
  [Headers.contentType]?: string,
  [Headers.cookie]?: string,
  [propName: string]: any;
};

type TOption = {
  uri: string,
  method?: string,
  headers?: THeaders,
  qs?: any,
  body?: any
};

export const requestHttp = (option: TOption): any => {
  return new Promise((reslove: any, reject: any) => {
		request(option, (err: any, res: any) => {
			if (err) {
				reject(err);
				return;
      }
      reslove(res);
      return;
		});
  });
};

export const getElement = async ({ uri, headers }: TOption, selector: string): Promise<any> => {
  const res = await requestHttp({
    uri,
    method: HttpMethod.GET,
    headers
  });
  const $ = cheerio.load(res.body);
  return $(selector);
};