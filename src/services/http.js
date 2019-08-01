import axios from 'axios'

const http = axios.create({
  baseURL: 'http://barberApi.test'
})
// http.defaults.baseURL = 'https://api.example.com'
// http.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
export default http
