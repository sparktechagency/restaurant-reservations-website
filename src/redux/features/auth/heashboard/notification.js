import { apiSlice } from "../../../api/apiSlice";

const getAllNotification = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllNotification: builder.query({
      query: () => "/info/notifications",
      method: "GET",
      providesTags: ["Notification"]
    }),

  })
});

const updateNotification = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateNotification: builder.mutation({
      query: (notificationId) => ({
        url: `/info/seen-notifications?notificationId=${notificationId}`,
        method: "PATCH",
        body: notificationId // newPost would be the data you send for creating a post
      }),
      providesTags: ["Notification"]
    })
  })
});






export const { useUpdateNotificationMutation } = updateNotification;
export const { useGetAllNotificationQuery } = getAllNotification;