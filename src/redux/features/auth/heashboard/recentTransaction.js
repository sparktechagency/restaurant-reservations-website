import { apiSlice } from "../../../api/apiSlice";

const getAllRecentTrangition = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllRecentTrangition: builder.query({
      query: () => "/admin/recent-transactions?infoType=recharge",  
      method: "GET", 
    })
  })
});

export const { useGetAllRecentTrangitionQuery } = getAllRecentTrangition;