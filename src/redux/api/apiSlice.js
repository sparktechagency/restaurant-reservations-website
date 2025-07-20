/* eslint-disable no-unused-vars */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.bidmedic.com/api/v1",
    // baseUrl: "http://104.131.190.64:6089/api/v1",
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem("token");
      //   console.log("9 baseApi", token);
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }


      return headers;
    }
  }),
  tagTypes: ["Promotion", "Product", "Users", "Coupon", "About", "Category", "Privacy", "Terms", "ProviderStatus", "AdminProfile", "MarketingFees", "Transaction", "Notification", "AdsBanner"],

  endpoints: () => ({})
});
