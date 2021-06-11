import httpClient from "./httpClient";

// Auth endpoints
export const authApi = {
  login: (data) => httpClient.post("login", data),
};
