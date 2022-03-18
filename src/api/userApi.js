import { config } from "../config";

export function getuserApi(id) {
  const baseUrl = `${config.basePath}/users/${id}/rol`;
  const url = baseUrl;

  return fetch(url)
    .then(async (response) => {
      return { code: response.status, data: await response.json() };
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}
