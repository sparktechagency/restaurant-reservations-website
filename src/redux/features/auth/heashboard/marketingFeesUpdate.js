import { apiSlice } from "../../../api/apiSlice";

const updateFees = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateFees: builder.mutation({
      query: ({data , id}) => ({
        url: `/info/fees?type=${id}`, // Dynamically inject the category ID into the URL
        method: "PUT", // Use PATCH to update the category
        body: data
      }),
      invalidatesTags: ["MarketingFees"]
    })
  })
});

export const { useUpdateFeesMutation } = updateFees;
