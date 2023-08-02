const BASE_URL = 'https://api.tvmaze.com/search/shows?q=';
const get_api = async query => {
  const res = (await fetch(`${BASE_URL}${query}`)).json();
  const body = await res;
  return body;
};

export default get_api;
