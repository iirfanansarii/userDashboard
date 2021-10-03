import axios from 'axios';
import { WEB_API_URL } from '../constants/config';

axios.defaults.baseURL = WEB_API_URL;

if (localStorage.getItem('token'))
  axios.defaults.headers.post['Content-Type'] = 'application/json';

const httpService = {
  post: axios.post,
  get: axios.get,
  put: axios.put,
  patch: axios.patch,
  all: axios.all,
  delete: axios.delete,
};

export default httpService;
