interface IProps {
  /**
   * url 地址
   */
  url: string;
  /**
   * 其它参数
   */
  [key: string]: string;
}

/**
 * url 地址拼接。 { url: "https://www.abc.com?t=55", par1: "abc", par2: "123" } => https://www.abc.com?t=55&par1=abc&par2=123
 * @param pars
 */
export function urlPars(pars: IProps) {
  const { url: url1, ...other } = pars;

  const url = url1.trim().replace(/[\?\&]*$/, "");

  const list: string[] = [];
  Object.getOwnPropertyNames(other).map(key => {
    list.push(`${key}=${encodeURIComponent(other[key])}`);
  });
  const urlOther = list.join("&");
  if (urlOther) {
    if (url.indexOf("?") > -1) {
      return `${url}&${urlOther}`;
    } else {
      return `${url}?${urlOther}`;
    }
  } else {
    return url;
  }
}
