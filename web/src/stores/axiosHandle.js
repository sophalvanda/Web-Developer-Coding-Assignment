import axios from "axios";


const baseAPI = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

baseAPI.interceptors.request.use((config) => {
  // const token = ''; // Replace 'token' with the actual cookie name
  // if (token) {
  //   config.headers.Authorization = `Bearer ${token}`;
  // } else {
  //   console.log("something wrong...");
  // }
  config.headers["Content-Type"] = "application/json";
  return config;
});

export default baseAPI;