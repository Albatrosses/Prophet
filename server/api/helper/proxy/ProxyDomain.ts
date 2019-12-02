import { requestHttp, HttpStatusCode, getElement, HttpMethod } from "../common/httpHelper";
import { timeLog, TMessage, timeErrorLog } from "../common/logHelper";
import getConfig, { ModuleName } from "../../../../config";
import { get, map, compact } from "lodash";

type TContent = {
  used: string,
  usedPercentage: string,
  remain: string,
  remainPercentage: string,
  daily: string,
  dailyPercentage: string
};

class ProxyDomain {
  private domain: string; 
  private loginPath: string;
  private mainPath: string;
  private checkInPath: string;
  private username: string;
  private password: string;
  private isLogin: boolean;
  private isCheckIn: boolean;
  private cookie: string;
  constructor() {
    const { domain, loginPath, mainPath, checkInPath, username, password } = getConfig(ModuleName.proxy);
    this.domain = domain;
    this.loginPath = loginPath;
    this.mainPath = mainPath;
    this.checkInPath = checkInPath;
    this.username = username;
    this.password = password;
    this.isLogin = false;
    this.isCheckIn = false;
    this.cookie = "";
  }

  public async getContent(): Promise<TContent> {
    await this.verify();
    const uri = `${this.domain}${this.mainPath}`;
    const statList = await getElement({
      uri,
      headers: {
        cookie: this.cookie
      }
    }, "ul.stat-list");
    const [ used, remain, daily ] = statList.find("li h2").text().trim().split(" ");
    const [ usedPercentage, remainPercentage, dailyPercentage ] = compact(statList.find("li small").text().trim().split(/[\u4e00-\u9fa5]+/));
    return {
      used,
      usedPercentage,
      remain,
      remainPercentage,
      daily,
      dailyPercentage
    }
  }

  private async login(): Promise<void> {
    const uri = `${this.domain}${this.loginPath}`;
    try {
      const res = await requestHttp({
        uri,
        method: HttpMethod.POST,
        qs: {
          email: this.username,
          passwd: this.password
        }
      });
      const { status, message } = this.parseMessage(res);
      timeLog({ status, message });
      this.isLogin = status === HttpStatusCode.ok;
      this.cookie = this.parseCookie(res);
    } catch(err) {
      timeErrorLog(err);
    }
  }

  private async checkIn(): Promise<void> {
    const uri = `${this.domain}${this.checkInPath}`;
    try {
      const res = await requestHttp({
        uri,
        method: HttpMethod.POST,
        headers: {
          cookie: this.cookie
        }
      });
      const { status, message } = this.parseMessage(res);
      timeLog({ status, message }); 
      this.isCheckIn = status === HttpStatusCode.ok;
    } catch(err) {
      timeErrorLog(err);
    }
  }

  private async verify(): Promise<void> {
    if (!this.isLogin) {
      await this.login();
      if (!this.isCheckIn) {
        await this.checkIn();
      }
    }
  }

  private parseMessage(res: any): TMessage {
    const result = JSON.parse(get(res, "body", {}));
    const status = !!get(result, "ret", false) ? HttpStatusCode.ok : HttpStatusCode.bad;
    const message = unescape(get(result, "msg"));
    return {
      status,
      message
    }
  }

  private parseCookie(res: any): string {
    const cookieArray = get(res, `headers['set-cookie']`, []);
    const cookie = map(cookieArray, cookieItem => cookieItem.split(" ")[0]).join(" ");
    return cookie
  }
}

export default new ProxyDomain();