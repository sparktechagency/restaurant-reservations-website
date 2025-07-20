import { apiSlice } from "../../../api/apiSlice";

const createPost = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createPost: builder.mutation({
      query: (newPost) => ({
        url: `/category`,
        method: "POST",
        body: newPost // newPost would be the data you send for creating a post
      }),
      invalidatesTags: ["Category"]
    })
  })
});

export const { useCreatePostMutation } = createPost;
