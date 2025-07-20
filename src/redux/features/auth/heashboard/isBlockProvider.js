import { apiSlice } from "../../../api/apiSlice";

const createIsBlocked = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createIsBlocked: builder.mutation({
      query: ({ id }) => ({
        url: `/users/${id}`, // Dynamically inject the category ID into the URL
        method: "POST", // Use PATCH to update the category 
      }),
      invalidatesTags: ["ProviderStatus"]
    }),
  }),
});

export const { useCreateIsBlockedMutation } = createIsBlocked;