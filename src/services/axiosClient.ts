import axios, { AxiosError, AxiosInstance } from 'axios';

const axiosClient: AxiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10s
});

// ✅ Request interceptor
axiosClient.interceptors.request.use(
  config => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

// ✅ Response interceptor
axiosClient.interceptors.response.use(
  response => response.data,
  async (error: AxiosError) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('accessToken');
      window.location.href = '/signin';
    }

    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  },
);

export default axiosClient;
