import { requestHttp } from "../common/httpHelper";
import { get } from "lodash";

class ProxyDomain {
  private domain: string; 
  private loginPath: string;
  private mainPath: string;
  private username: string;
  private password: string;
  constructor(
    domain: string,
    loginPath: string,
    mainPath: string,
    username: string,
    password: string
  ) {
    this.domain = domain;
    this.loginPath = loginPath;
    this.mainPath = mainPath;
    this.username = username;
    this.password = password;
  }

  public async login() {
    const uri = `${this.domain}${this.loginPath}`;
    const res = await requestHttp({
      uri,
      method: "post",
      qs: {
        email: this.username,
        passwd: this.password
      }
    }, true);
    const result = JSON.parse(get(res, "body", {}));
    return {
      message: unescape(get(result, "msg")),
      status: !!get(res, "ret", false)
    };
  }

  public async entry() {
    return false;
  }
}

export default ProxyDomain;