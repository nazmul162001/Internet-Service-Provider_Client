// src/redux/api/apiSlice.ts

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../config'; // Replace with your API's base URL
import Cookies from 'js-cookie';

export const getAccessToken = () => {
  return Cookies.get('accessToken');
}

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getAccessToken();
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: () => ({}), // Define your endpoints here as needed
});

// Export the hooks for querying and mutating data
// export const { useLazyQuery, useQuery, useMutation } = api;