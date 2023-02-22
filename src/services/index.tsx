import axios, { HeadersDefaults } from "axios";

const api = axios.create();

api.defaults.baseURL =
  "https://sweet-apple-acres.netlify.app/.netlify/functions/api/";

export default api;
