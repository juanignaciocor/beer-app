import axios from "axios";
const instance = axios.create({
  baseURL: "https://api.punkapi.com/v2/beers",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export default instance;
