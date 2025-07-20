import { apiSlice } from "../../../api/apiSlice";

const getAllWidthdrawRequest = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllWidthdrawRequest: builder.query({
            query: () => "/admin/recent-transactions?infoType=withdraw",
            method: "GET",
            providesTags: ["Transaction"]
        })
    })
});


const updateWidthrawRequest = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        updateWidthrawRequest: builder.mutation({
            query: ({transactionId , status}) => ({
                url: "/wallet/update-transaction",
                method: "PUT",
                body: {transactionId , status} // newPost would be the data you send for creating a post
            }),
            invalidatesTags: ["Transaction"]
        })
    })
});


export const { useUpdateWidthrawRequestMutation } = updateWidthrawRequest;
export const { useGetAllWidthdrawRequestQuery } = getAllWidthdrawRequest;