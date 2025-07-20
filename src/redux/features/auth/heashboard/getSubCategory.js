import { apiSlice } from "../../../api/apiSlice";

const getSubCategories = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSubCategories: builder.query({
      query: ({ id,pageNumber }) => `/category/sub-categorys?categorieId=${id}&page=${pageNumber}`, // Dynamic URL with query parameters
      method: "GET",
      providesTags: ["Category"]
    })
  })
});

export const { useGetSubCategoriesQuery } = getSubCategories;
