import { apiSlice } from "../../../api/apiSlice";

const getProfile = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => `/profile/info`,
      method: "GET",
      providesTags: ["AdminProfile"]
    })
  })
});

export const { useGetProfileQuery } = getProfile;
