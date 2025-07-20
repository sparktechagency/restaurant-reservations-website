import { apiSlice } from "../../../api/apiSlice";

const createUpdateCategory = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createUpdateCategory: builder.mutation({
      query: ({ id, newPost }) => ({
        url: `/category/${id}`, // Dynamically inject the category ID into the URL
        method: "PATCH", // Use PATCH to update the category
        body: newPost, // The new category data you want to update (e.g., category name, image)
      }),
      invalidatesTags: ["Category"],
    }),
  }),
});

export const { useCreateUpdateCategoryMutation } = createUpdateCategory;
