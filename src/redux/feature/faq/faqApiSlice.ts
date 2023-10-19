import { api } from '@/redux/api/apiSlice'

const faqApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getFaq: builder.query({
      query: () => ({
        url: '/api/v1/faqs',
        method: 'GET',
        providesTags: ['faqs'],
      }),
    }),
  }),
})

export const { useGetFaqQuery } = faqApi
