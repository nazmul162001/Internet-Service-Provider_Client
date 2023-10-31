import { api } from '@/redux/api/apiSlice'

const faqApi = api.injectEndpoints({
  endpoints: (builder) => ({

    getFaq: builder.query({
      query: () => ({
        url: '/api/v1/faqs',
        method: 'GET',
      }),
      providesTags: ['Faq'],
    }),   
    // getFaq: builder.query({
    //   query: () => `/api/v1/faqs`,
    //   providesTags: ['Faq'],
    // }), 

    addFaq: builder.mutation({
      query: (data) => {
        return {
          url: `/api/v1/faqs/create-faq`,
          method: 'POST',
          body: data,
        }
      },
      invalidatesTags: ['Faq'],
    }),
    deleteFaq: builder.mutation<any, string>({
      query: (id) => ({
        url: `/api/v1/faqs/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Faq'],
    }),
    updateFaq: builder.mutation({
      query: (faqData) => ({
        url: `/api/v1/faqs/${faqData.id}`,
        method: 'PATCH',
        body: faqData,
      }),
      invalidatesTags: ['Faq'],
    }),
  }),
})

export const {
  useGetFaqQuery,
  useAddFaqMutation,
  useDeleteFaqMutation,
  useUpdateFaqMutation,
} = faqApi
