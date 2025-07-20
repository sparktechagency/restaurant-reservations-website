import { apiSlice } from "../../../api/apiSlice";

const createPostSubcategory = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createPostSubcategory: builder.mutation({
      query: ({ id, newPost }) => ({
        url: `/category/${id}/sub-categories`, // Make sure to inject the `id` dynamically
        method: "POST",
        body: newPost,
      }),
      invalidatesTags: ["Category"]
    }),
  }),
});

export const { useCreatePostSubcategoryMutation } = createPostSubcategory;
