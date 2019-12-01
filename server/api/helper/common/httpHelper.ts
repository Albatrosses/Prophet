import request from "request";

export enum Headers {
  contentType = "content-type"
}

type THeaders = {
  [Headers.contentType]: string,
  [propName: string]: any;
}

type TOption = {
  uri: string,
  method: string,
  headers?: THeaders,
  qs?: any,
  body?: any
}

export const requestHttp = (option: TOption, useCookie: boolean = false) => {
  request.defaults({ jar: useCookie });
  return new Promise((reslove: any, reject: any) => {
		request(option, (err, res) => {
			if (err) {
				reject(err);
				return;
      }
      reslove(res);
      return;
		});
  });
}