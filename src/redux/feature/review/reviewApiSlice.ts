import { api } from '@/redux/api/apiSlice'

const reviewApi = api.injectEndpoints({
  endpoints: (builder) => ({
    postReview: builder.mutation({
      query: ({ serviceId, userId, data }) => {
        return {
          url: `/api/v1/reviews/create-review`,
          method: 'POST',
          body: data,
        }
      },
      invalidatesTags: ['review'],
    }),
  }),
})

export const { usePostReviewMutation } = reviewApi
