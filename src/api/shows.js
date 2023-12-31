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

export async function getShowsByIds(showIds) {
  const promises = showIds.map(showId => {
    return getShowById(showId);
  });

  const arr = await Promise.all(promises);
  console.log(arr);
  return arr;
}
