import axios from 'axios';

const baseConfig = {
  baseURL: `https://api.themoviedb.org/3`,
  apiKey: `3cd3ab3406f80498de9bab58a92d92d3`,
}

export const axiosInstance = axios.create(baseConfig);