import { api } from '@/redux/api/apiSlice'

const feedbackApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getFeedback: builder.query({
      query: () => `/api/v1/feedbacks`,
      providesTags: ['Feedback'],
    }),
    
  }),
})

export const { useGetFeedbackQuery } = feedbackApi
