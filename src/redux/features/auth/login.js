import { apiSlice } from "../../api/apiSlice.js";

const adminLogin = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                url: `/auth/register`,
                method: "POST",
                body: data
            })
        }),
        adminLogin: builder.mutation({
            query: (data) => ({
                url: `/auth/login`,
                method: "POST",
                body: data
            })
        }),
        verifyOtp: builder.mutation({
            query: (data) => ({
                url: `/auth/verify-email`,
                method: "POST",
                body: data
            })
        })
    })
})

export const {
    useAdminLoginMutation,
    useRegisterMutation,
    useVerifyOtpMutation

} = adminLogin;