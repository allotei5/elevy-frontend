/**
 * It sets a cookie with the name and value passed to it
 * @param cookie_name - The name of the cookie you want to set.
 * @param cookie_value - The value of the cookie.
 */
export const setCookie = (cookie_name, cookie_value) => {
    let now = new Date()
    let time = now.getTime()
    let expireTime = time + 6000 * 3600
    now.setTime(expireTime)
    document.cookie = cookie_name + "=" + cookie_value + ";expires=" + now.toUTCString() + ";path=/"
}

export const getCookie = (cname) => {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export const deleteCookie = (cookie_name) => {
  document.cookie = `${cookie_name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}