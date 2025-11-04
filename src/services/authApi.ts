import { config } from '@/configs/config';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: config.baseApiUrl,
    prepareHeaders: headers => {
      const token = localStorage.getItem('accessToken');
      if (token) headers.set('Authorization', `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ['Auth'],
  endpoints: builder => ({
    // Login
    login: builder.mutation({
      query: credentials => ({
        url: '/login',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['Auth'],
    }),

    // Register
    register: builder.mutation({
      query: userData => ({
        url: '/register',
        method: 'POST',
        body: userData,
      }),
    }),

    // Logout
    logout: builder.mutation({
      query: () => ({
        url: '/logout',
        method: 'POST',
      }),
      invalidatesTags: ['Auth'],
    }),

    // Refresh token
    refreshToken: builder.mutation({
      query: refreshToken => ({
        url: '/refresh',
        method: 'POST',
        body: { refreshToken },
      }),
    }),

    // Get profile
    getProfile: builder.query({
      query: () => '/profile',
      providesTags: ['Auth'],
    }),

    // Update profile
    updateProfile: builder.mutation({
      query: profileData => ({
        url: '/profile',
        method: 'PUT',
        body: profileData,
      }),
      invalidatesTags: ['Auth'],
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useRefreshTokenMutation,
  useGetProfileQuery,
  useUpdateProfileMutation,
} = authApi;
