import { api } from '@/redux/api/apiSlice'

const blogApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => ({
        url: '/api/v1/blogs',
        method: 'GET',
        providesTags: ['blogs'],
      }),
    }),
  }),
})

export const { useGetBlogsQuery } = blogApi
