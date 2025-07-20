import { apiSlice } from "../../../api/apiSlice";

const createAboutPost = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createAboutPost: builder.mutation({
      query: (newPost) => ({
        url: "/info/about-us",
        method: "POST",
        body: newPost // newPost would be the data you send for creating a post
      }) ,
      invalidatesTags: ["About"]
    })
  })
});

export const { useCreateAboutPostMutation } = createAboutPost;
