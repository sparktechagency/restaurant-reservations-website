import { apiSlice } from "../../../api/apiSlice";

const getProviderAllSubcatogory = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProviderAllSubcatogory: builder.query({
      query: (id) => `/category/sub-categorys?categorieId=${id}`,  
      method: "GET",
    })
  })
});




export const { useGetProviderAllSubcatogoryQuery } = getProviderAllSubcatogory;