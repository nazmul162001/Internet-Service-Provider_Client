import { api } from '@/redux/api/apiSlice'

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooking: builder.query({
      query: () => ({
        url: '/api/v1/bookings',
        method: 'GET',
        providesTags: ['booking'],
      }),
    }),
  }),
})

export const { useGetBookingQuery } = userApi
