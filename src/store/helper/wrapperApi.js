import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const domain = "api_url here";
export const baseUrl = `${domain}/user`;

export const wrapperAPI = createApi({
  reducerPath: "wrapperApi",
  tagTypes: [],
  baseQuery: fetchBaseQuery({
    baseUrl: domain,
    prepareHeaders: (header) => {
      const token = localStorage.getItem("jwt");
      if (token) {
        header.set("Authorization", `Bearer ${token}`);
      }
      return header;
    },
  }),

  endpoints: () => ({}),
});
