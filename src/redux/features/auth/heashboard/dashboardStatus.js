import { apiSlice } from "../../../api/apiSlice";

const getDashboardStatus = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDashboardStatus: builder.query({
      query: () => "/admin/totalStatus",  
      method: "GET"
    })
  })
});

export const { useGetDashboardStatusQuery } = getDashboardStatus;