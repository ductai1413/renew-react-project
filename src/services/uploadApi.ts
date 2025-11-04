import { config } from '@/configs/config';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// API slice
export const uploadApi = createApi({
  reducerPath: 'uploadApi',
  baseQuery: fetchBaseQuery({
    baseUrl: config.baseApiUrl,
    prepareHeaders: headers => {
      const token = localStorage.getItem('token');
      if (token) headers.set('Authorization', `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ['Upload'],
  endpoints: builder => ({
    // Single file upload
    uploadFile: builder.mutation({
      query: file => {
        const formData = new FormData();
        formData.append('file', file);

        return {
          url: '/upload',
          method: 'POST',
          body: formData,
        };
      },
      invalidatesTags: ['Upload'],
    }),

    // Multiple files upload
    uploadMultipleFiles: builder.mutation({
      query: files => {
        const formData = new FormData();
        /* files.forEach((file, index) => {
          formData.append(`files`, file);
        }); */
        files.forEach();

        return {
          url: '/upload/multiple',
          method: 'POST',
          body: formData,
        };
      },
      invalidatesTags: ['Upload'],
    }),

    // Upload với progress (cần custom baseQuery)
    uploadWithProgress: builder.mutation({
      query: ({ file, onProgress }) => {
        const formData = new FormData();
        formData.append('file', file);

        return {
          url: '/upload',
          method: 'POST',
          body: formData,
          onProgress,
        };
      },
    }),

    // Delete file
    deleteFile: builder.mutation({
      query: fileId => ({
        url: `/upload/${fileId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Upload'],
    }),
  }),
});

export const {
  useUploadFileMutation,
  useUploadMultipleFilesMutation,
  useUploadWithProgressMutation,
  useDeleteFileMutation,
} = uploadApi;
