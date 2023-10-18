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
    login: builder.mutation({
      query: (credentials) => ({
        url: '/api/v1/auth/signin',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['login'],
    }),
    signup: builder.mutation({
      query: (userData) => ({
        url: '/api/v1/auth/signup',
        method: 'POST',
        body: userData,
      }),
    }),
    getProfile: builder.query<UserProfile, void>({
      query: () => ({
        url: '/api/v1/profile',
        method: 'GET',
        providesTags: ['profile'],
      }),
    }),
    updateProfile: builder.mutation<UserProfile, Partial<UserProfile>>({
      query: (profileData) => ({
        url: `/api/v1/users/${profileData.id}`,
        method: 'PATCH',
        body: profileData,
      }),
      invalidatesTags: ['profile'],
    }),
  }),
})

export const {
  useSignupMutation,
  useLoginMutation,
  useGetProfileQuery,
  useUpdateProfileMutation,
} = userApi
