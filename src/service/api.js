import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://37sn07n0rf.execute-api.us-east-1.amazonaws.com"
});