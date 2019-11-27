import puppeteer, { Browser, ElementHandle } from "puppeteer";
import IHttpMethod from "./interfaces/IHttpMethod";

class HttpMethod implements IHttpMethod {
	private browser: Browser;
	constructor() {
		this.browser = null
	}

	public async getDocument(url: string, selector: string): Promise<ElementHandle> {
		await this.launch();
		const page = await this.browser.newPage();
		await page.goto(url);
		const dom = await page.$(selector);
		await this.close()
		return dom;
	}

	private async launch() {
		this.browser = await puppeteer.launch();
	}
	private async close() {
		await this.browser.close();
	}
};

export default new HttpMethod();
