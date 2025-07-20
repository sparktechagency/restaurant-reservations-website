import { apiSlice } from "../../../api/apiSlice";

const getAllReports = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllReports: builder.query({
            query: () => "/report/all",
            method: "GET"
            
        })
    })
});

export const { useGetAllReportsQuery } = getAllReports;
