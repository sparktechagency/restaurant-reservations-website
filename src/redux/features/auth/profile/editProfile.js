import { apiSlice } from "../../../api/apiSlice";

const updateProfile = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateProfile: builder.mutation({
      query: (data) => ({
        url: `/profile/info/update`, // Make sure this matches the correct route in your backend
        method: "PATCH", // Change to PATCH
        body: data // Send the formData or data as the body
      }),
      invalidatesTags: ["AdminProfile"]
      // AdminProfile
    })
  })
});

export const { useUpdateProfileMutation } = updateProfile;
