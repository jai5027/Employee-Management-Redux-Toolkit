import axios from 'axios'

const api = axios.create({
  baseURL: 'https://698b58416c6f9ebe57bc642d.mockapi.io/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'}
});


export default api