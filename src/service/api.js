import axios from "axios";
import { getLocalStorage } from "../utils/helpers";

export const apiClient = axios.create({
  baseURL: "https://37sn07n0rf.execute-api.us-east-1.amazonaws.com",
});

// COLOCAR INTERCEPTORS PARA REQUEST E RESPONSE

apiClient.interceptors.response.use(
  function (response) {
    console.log("Response?");
    return response;
  },
  function (error) {
    console.log("E aqui?");
    if (error.status === 403) {
      window.localStorage.clear();
      window.location.reload();
    }
    return Promise.reject(error);
  }
);

apiClient.defaults.headers.common["Authorization"] = `Bearer ${getLocalStorage(
  "token"
)}`;
