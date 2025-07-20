import { apiSlice } from "../../../api/apiSlice";

 
const getTermsAndService = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTermsAndService: builder.query({
      query: () => "/info/terms-services",  
      method: "GET",
      providesTags: ["Terms"]
    })
  })
});

export const { useGetTermsAndServiceQuery } = getTermsAndService;

 