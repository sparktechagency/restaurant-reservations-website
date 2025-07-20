import { apiSlice } from "../../../api/apiSlice";

const deleteCategories = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    deleteCategories: builder.mutation({
      query: (categoryId) => ({
        url: `/category/${categoryId}`, // Assuming your API is set up this way
        method: "DELETE"
      }),
      // Specify which cache tags to invalidate after the deletion
      invalidatesTags: ["Category"]
    })
  })
});

export const { useDeleteCategoriesMutation } = deleteCategories;
