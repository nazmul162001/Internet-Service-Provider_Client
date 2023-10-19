import { api } from '@/redux/api/apiSlice'

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
  }),
})

export const { useAddToCartMutation } = cartApi
