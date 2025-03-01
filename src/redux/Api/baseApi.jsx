import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "143.110.241.146:8080",
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("accessToken");
    const refreshToken = JSON.parse(localStorage.getItem("refreshToken"));
    console.log(token);
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    // if (refreshToken) {
    //   headers.set("Authorization", `Bearer ${refreshToken}`);
    // }
    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  tagTypes: ["overview", "host"],
  endpoints: () => ({}),
});

export const imageUrl = "143.110.241.146:8080";
