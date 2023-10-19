import { api } from '@/redux/api/apiSlice'
interface UserProfile {
  [x: string]: any
  email: string
  role: string
  name: string
  profileImage: string
  phoneNumber: string
}

const userApi = api.injectEndpoints({
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
  }),
})

export const { useCreateServiceMutation, useGetServiceQuery, useDeleteServiceMutation } = userApi
