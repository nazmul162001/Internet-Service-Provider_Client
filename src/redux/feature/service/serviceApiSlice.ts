import { api } from '@/redux/api/apiSlice'
interface UserProfile {
  [x: string]: any
  email: string
  role: string
  name: string
  profileImage: string
  phoneNumber: string
}

const serviceApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createService: builder.mutation({
      query: (serviceData) => ({
        url: '/api/v1/services/create-service',
        method: 'POST',
        body: serviceData,
      }),
    }),
    getService: builder.query({
      query: () => ({
        url: '/api/v1/services',
        method: 'GET',
        providesTags: ['services'],
      }),
    }),
    getSingleService: builder.query({
      query: (id) => ({
        url: `/api/v1/services/${id}`,
        method: 'GET',
        providesTags: ['services'],
      }),
    }),
    // searchService: builder.query({
    //   query: (value) => ({
    //     url: `/api/v1/services?search=${value}`,
    //     method: 'GET',
    //     providesTags: ['services'],
    //   }),
    // }),
    deleteService: builder.mutation({
      query: (serviceId) => ({
        url: `/api/v1/services/${serviceId}`,
        method: 'DELETE',
      }),
    }),

    getServiceByCategory: builder.query({
      query: ({ minPrice, maxPrice, category }) => {
        let url = '/api/v1/services'

        let queryParameters = ''

        if (minPrice) {
          queryParameters += `&minPrice=${minPrice}`
        }

        if (maxPrice) {
          queryParameters += `&maxPrice=${maxPrice}`
        }

        if (category) {
          queryParameters += `&category=${category}`
        }

        if (queryParameters) {
          url += `?${queryParameters.substring(1)}`
        }

        return {
          url,
          method: 'GET',
          providesTags: ['services'],
        }
      },
    }),
  }),
})

export const {
  useCreateServiceMutation,
  useGetServiceQuery,
  useDeleteServiceMutation,
  useGetServiceByCategoryQuery,
  useGetSingleServiceQuery
} = serviceApi
