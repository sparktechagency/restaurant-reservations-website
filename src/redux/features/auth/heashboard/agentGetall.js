import { apiSlice } from "../../../api/apiSlice";

const getAllAgents = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllAgents: builder.query({
      query: (id) => `/users/all?role=agent&sortBy=createdAt:desc`,  
      method: "GET",
    })
  })
});

export const { useGetAllAgentsQuery } = getAllAgents;