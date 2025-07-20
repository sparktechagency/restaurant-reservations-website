import { apiSlice } from "../../../api/apiSlice";

const getProviderCategoryProducts = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProviderCategoryProducts: builder.query({
      query: ({categoryId, id}) => `product/bycategory-user?sortBy=createdAt:desc&category=${categoryId}&subCategory=${id}`,  
      method: "GET",
    })
  })
});

export const { useGetProviderCategoryProductsQuery } = getProviderCategoryProducts;