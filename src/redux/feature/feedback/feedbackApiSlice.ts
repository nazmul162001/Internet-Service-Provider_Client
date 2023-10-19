import { api } from '@/redux/api/apiSlice'

const feedbackApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getFeedback: builder.query({
      query: () => ({
        url: '/api/v1/feedbacks',
        method: 'GET',
        providesTags: ['feedbacks'],
      }),
    }),
  }),
})

export const { useGetFeedbackQuery } = feedbackApi
