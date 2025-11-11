import { UserProfile } from '@/types/user/UserProfile';
import axiosClient from './axiosClient';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { config } from '@/configs/config';

export const authService = {
  getGoogleUser: async (url: string, token: string) =>
    await axiosClient.get<UserProfile>(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
};

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: config.baseApiUrl,
    prepareHeaders: headers => {
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Users', 'User'],
  endpoints: builder => ({
    // Lấy tất cả users
    getUsers: builder.query({
      query: () => '/users',
      providesTags: ['Users'],
    }),

    // Lấy user by ID
    getUserById: builder.query({
      query: id => `/users/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'User', id }],
    }),

    // Upload avatar (FormData)
    uploadAvatar: builder.mutation({
      query: ({ userId, file }) => {
        const formData = new FormData();
        formData.append('avatar', file);

        return {
          url: `/users/${userId}/avatar`,
          method: 'POST',
          body: formData,
          formData: true,
        };
      },
      invalidatesTags: (_result, _error, { userId }) => [{ type: 'User', id: userId }],
    }),
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery, useUploadAvatarMutation } = usersApi;
