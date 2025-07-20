import { apiSlice } from "../../../api/apiSlice";

const createTermsPost = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createTermsPost: builder.mutation({
      query: (newPost) => ({
        url: "/info/terms-services",
        method: "POST",
        body: newPost // newPost would be the data you send for creating a post
      }),
      invalidatesTags: ["Terms"]
    })
  })
});

export const { useCreateTermsPostMutation } = createTermsPost;
