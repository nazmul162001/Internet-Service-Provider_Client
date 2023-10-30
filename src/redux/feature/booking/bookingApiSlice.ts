import { api } from "@/redux/api/apiSlice";

const bookingApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooking: builder.query({
      query: () => `/api/v1/bookings`,
      providesTags: ["Booking"],
    }),
    booking: builder.mutation({
      query: ({ userId, data }) => {
        return {
          url: `/api/v1/bookings/create-booking`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Booking"],
    }),
    deleteBooking: builder.mutation<any, string>({
      query: (id) => ({
        url: `/api/v1/bookings/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Booking"],
    }),
    updateBookingStatus: builder.mutation({
      query: ({ id, newStatus }) => ({
        url: `/api/v1/bookings/${id}`,
        method: "PATCH",
        body: { status: newStatus },
      }),
      invalidatesTags: ["Booking"],
    }),
  }),
});

export const {
  useGetBookingQuery,
  useBookingMutation,
  useDeleteBookingMutation,
  useUpdateBookingStatusMutation
} = bookingApi;
