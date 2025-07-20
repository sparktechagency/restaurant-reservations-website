import { apiSlice } from "../../../api/apiSlice";

const getMarketingFees = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMarketingFees: builder.query({
      query: () => "/info/fees",  
      method: "GET", 
      providesTags: ["MarketingFees"]
    })
  })
});

export const { useGetMarketingFeesQuery } = getMarketingFees;