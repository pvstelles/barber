import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
})

http.interceptors.request.use(function (config) {
    const token = sessionStorage.getItem('token')
    console.log(token)

    if (token != null) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
}, function (err) {
    return Promise.reject(err)
})
// http.defaults.baseURL = 'https://api.example.com'
// http.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
export default http
