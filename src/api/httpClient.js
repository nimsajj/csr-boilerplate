import axios from "axios";

const config = {
  baseURL: "http://localhost:3000/api/",
  responseType: "json",
  headers: {
    Accept: "application/json",
  },
};

const httpClient = axios.create(config);

export default httpClient;
