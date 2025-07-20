import { apiSlice } from "../../../api/apiSlice";

const getAllUser = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllUser: builder.query({
      query: () => "/users/all?role=user",  
      method: "GET",
      providesTags: ["About"]
    })
  })
});

export const { useGetAllUserQuery } = getAllUser;