import { apiSlice } from "../../../api/apiSlice";

const getSingleProvider = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSingleProvider: builder.query({
      query: (id) => `/admin/provider/${id}`,  
      method: "GET",
    })
  })
});

export const { useGetSingleProviderQuery } = getSingleProvider;