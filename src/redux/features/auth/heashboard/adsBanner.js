import { apiSlice } from "../../../api/apiSlice";



const adsBannerApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllAdsBanner: builder.query({
            query: ({ status = "on-hold" }) => ({
                url: `/ads/admon-all?status=${status}`,
                method: "GET",
            }),
            providesTags: ["AdsBanner"],
        }),
        getSingleAdsBanner: builder.query({
            query: (id) => ({
                url: `/ads/single/${id}`,
                method: "GET",
            }),
            providesTags: ["Add"]
        }),
        updatePublished: builder.mutation({
            query: ({ id, status }) => ({
                url: `ads/update/${id}`,
                method: "PATCH",
                body: status,
            }),
            invalidatesTags: ["AdsBanner"]
        }),
        updateDeclime: builder.mutation({
            query: ({ status, declaimedMessage, id }) => ({
                url: `/ads/update/${id}`,
                method: "PATCH",
                body: { status, declaimedMessage },
            }),
            invalidatesTags: ["AdsBanner"],
        }),
    }),
});


// const adsBannerApi2 = apiSlice.injectEndpoints({
//     endpoints: (builder) => ({

//         getSingleAdsBanner: builder.query({
//             query: (id) => ({
//                 url: `/ads/single/${id}`,
//                 method: "GET",
//             }),
//             providesTags: ["AdsBanner"],
//         }),
//     }),
// });

// const adsBannerApi3 = apiSlice.injectEndpoints({
//     endpoints: (builder) => ({

//         updatePublished: builder.mutation({
//             query: ({ id, status }) => ({
//                 url: `ads/update/${id}`,
//                 method: "PATCH",
//                 body: status,
//             }),
//             invalidatesTags: ["AdsBanner"],
//         }),
//     }),
// });
// const adsBannerApi4 = apiSlice.injectEndpoints({
//     endpoints: (builder) => ({

//         updateDeclime: builder.mutation({
//             query: ({ status, declaimedMessage, id }) => ({
//                 url: `/ads/update/${id}`,
//                 method: "PATCH",
//                 body: { status, declaimedMessage },
//             }),
//             invalidatesTags: ["AdsBanner"],
//         }),
//     }),
// });




// export const { useGetAllAdsBannerQuery } = adsBannerApi;
// export const { useGetSingleAdsBannerQuery } = adsBannerApi2;
// export const { useUpdatePublishedMutation } = adsBannerApi3;
// export const { useUpdateDeclimeMutation } = adsBannerApi4;



export const { useGetAllAdsBannerQuery, useGetSingleAdsBannerQuery, useUpdatePublishedMutation, useUpdateDeclimeMutation } = adsBannerApi;