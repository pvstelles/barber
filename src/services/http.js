import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'accept': 'application/json',
    'Authorization': 'Bearer ' + sessionStorage.getItem('token')
  }
})
// http.defaults.baseURL = 'https://api.example.com'
// http.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
export default http
