import { config } from "../config";

export function signInApi(data) {
  const url = `${config.basePath}/`;
  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };
  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.message;
    });
}

export function getAccessTokenApi() {
  const accessToken = localStorage.getItem(config.ACCESS_TOKEN);

  if (!accessToken || accessToken === "null") {
    return null;
  }
  return willExpireToken(accessToken) ? null : accessToken;
}

export function getRefreshTokenApi() {
  const refreshToken = localStorage.getItem(config.REFRESH_TOKEN);

  if (!refreshToken || refreshToken === "null") {
    return null;
  }

  return willExpireToken(refreshToken) ? null : refreshToken;
}

export function logout() {
  localStorage.removeItem(config.ACCESS_TOKEN);
  localStorage.removeItem(config.REFRESH_TOKEN);
}

function willExpireToken(token) {
  // const seconds = 60;
  // const metaToken = jwtDecode(token);
  // const { exp } = metaToken;
  // const now = (Date.now() + seconds) / 1000;
  // return now > exp;
  return false;
}
