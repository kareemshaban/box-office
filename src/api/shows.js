const BASE_URL = 'https://api.tvmaze.com/';
const get_api = async query => {
  const res = (await fetch(`${BASE_URL}${query}`)).json();
  const body = await res;
  return body;
};

export function getShows(queryStr) {
  return get_api(queryStr);
}
export function getActors(queryStr) {
  return get_api(queryStr);
}

export function getShowById(queryStr) {
  return get_api(`shows/${queryStr}?embed[]=seasons&embed[]=cast`);
}
