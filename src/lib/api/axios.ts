import Axios from 'axios';

const api = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, //eslint-disable-line
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  withCredentials: true,
});

export default api;