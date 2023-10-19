import { api } from '../../../redux/api/apiSlice'

const cartApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: (serviceData) => ({
        url: '/api/v1/carts/add-cart',
        method: 'POST',
        body: serviceData,
      }),
      invalidatesTags: ['cart'],
    }),
    getCart: builder.query({
      query: () => `/api/v1/carts`,
      providesTags: ['cart'],
    }),
    deleteCart: builder.mutation<any, string>({
      query: (id) => ({
        url: `/api/v1/carts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['cart'],
    }),
  }),
})

export const { useAddToCartMutation, useGetCartQuery, useDeleteCartMutation } =
  cartApi
