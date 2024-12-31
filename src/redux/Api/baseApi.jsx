import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://tha-drop.onrender.com",
  prepareHeaders: (headers) => {
    const token = JSON.parse(localStorage.getItem("accessToken"));
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

export const imageUrl = "https://tha-drop.onrender.com";
