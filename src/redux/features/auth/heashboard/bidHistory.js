import { apiSlice } from "../../../api/apiSlice";

const getAllBidHistory = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllBidHistory: builder.query({
      query: () => "admin/bid/all",  
      method: "GET", 
    })
  })
});

export const { useGetAllBidHistoryQuery } = getAllBidHistory;