import { apiSlice } from "../../../api/apiSlice";

const createPrivacyPost = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createPrivacyPost: builder.mutation({
      query: (newPost) => ({
        url: "/info/privacy-policy",
        method: "POST",
        body: newPost // newPost would be the data you send for creating a post
      }),
      invalidatesTags: ["Privacy"]
    })
  })
});

export const { useCreatePrivacyPostMutation } = createPrivacyPost;
