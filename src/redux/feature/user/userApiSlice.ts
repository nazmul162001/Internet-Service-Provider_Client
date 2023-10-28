import { api } from '@/redux/api/apiSlice'
interface UserProfile {
  [x: string]: any
  email: string
  role: string
  name: string
  profileImage: string
  phoneNumber: string
}

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/api/v1/auth/signin',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['Profile'],
    }),
    signup: builder.mutation({
      query: (userData) => ({
        url: '/api/v1/auth/signup',
        method: 'POST',
        body: userData,
      }),
      invalidatesTags: ['Profile'],
    }),
    getProfile: builder.query({
      query: () => `/api/v1/profile`,
      providesTags: ['Profile'],
    }),
    
    updateProfile: builder.mutation<UserProfile, Partial<UserProfile>>({
      query: (profileData) => ({
        url: `/api/v1/users/${profileData.id}`,
        method: 'PATCH',
        body: profileData,
      }),
      invalidatesTags: ['Profile'],
    }),
    getUsers: builder.query({
      query: () => `/api/v1/users`,
      providesTags: ['Profile'],
    }),    
  }),
})

export const {
  useSignupMutation,
  useLoginMutation,
  useGetProfileQuery,
  useUpdateProfileMutation,
  useGetUsersQuery,
} = userApi
