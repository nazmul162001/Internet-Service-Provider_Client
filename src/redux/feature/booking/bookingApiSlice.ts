import { api } from '@/redux/api/apiSlice'

const bookingApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooking: builder.query({
      query: () => ({
        url: '/api/v1/bookings',
        method: 'GET',
        providesTags: ['booking'],
      }),
    }),
    // booking: builder.mutation({
    //   query: (bookingData) => ({
    //     url: '/api/v1/bookings/create-booking',
    //     method: 'POST',
    //     body: bookingData,
    //   }),
    //   invalidatesTags: ['booking'],
    // }),
    booking: builder.mutation({
      query: ({ userId, data }) => {
        return {
          url: `/api/v1/bookings/create-booking`,
          method: 'POST',
          body: data,
        }
      },
      invalidatesTags: ['booking'],
    }),
  }),
})

export const { useGetBookingQuery, useBookingMutation } = bookingApi
