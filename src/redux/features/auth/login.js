import { apiSlice } from "../../api/apiSlice.js";

const adminLogin = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        adminLogin: builder.mutation({
            query: (data) => ({
                url: `/auth/login`,
                method: "POST",
                body: data
            })
        })
    })
})

  export const {useAdminLoginMutation} = adminLogin;