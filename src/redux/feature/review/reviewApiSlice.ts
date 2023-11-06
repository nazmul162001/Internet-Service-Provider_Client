import { api } from "@/redux/api/apiSlice";

const reviewApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getReview: builder.query({
      query: () => "/api/v1/reviews",
      providesTags: ["Service"],
    }),
    postReview: builder.mutation({
      query: ({ serviceId, userId, data }) => {
        return {
          url: `/api/v1/reviews/create-review`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Service"],
    }),
  }),
});

export const { usePostReviewMutation, useGetReviewQuery } = reviewApi;
