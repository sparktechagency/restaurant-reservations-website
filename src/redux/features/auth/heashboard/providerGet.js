import { apiSlice } from "../../../api/apiSlice";

const getAllProvider = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProvider: builder.query({
      query: () => "/users/all?role=provider",  
      method: "GET",
      providesTags: ["ProviderStatus"]
    }),

  })
});

export const { useGetAllProviderQuery } = getAllProvider;