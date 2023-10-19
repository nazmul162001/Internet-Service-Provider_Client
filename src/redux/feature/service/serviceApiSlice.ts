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
    deleteService: builder.mutation({
      query: (serviceId) => ({
        url: `/api/v1/services/${serviceId}`,
        method: 'DELETE',
      }),
    }),
    getServiceByCategory: builder.query({
      query: ({ category, minPrice, maxPrice }) => {
        let url = '/api/v1/services'

        // Build the query string based on provided parameters
        const queryParams = []

        if (category !== undefined) {
          queryParams.push(`category=${category}`)
        }

        if (minPrice !== undefined) {
          queryParams.push(`minPrice=${minPrice}`)
        }

        if (maxPrice !== undefined) {
          queryParams.push(`maxPrice=${maxPrice}`)
        }

        if (queryParams.length > 0) {
          url += '?' + queryParams.join('&')
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
} = serviceApi
