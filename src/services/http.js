import axios from 'axios'
import route from '@/router'

const http = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:8080'
  },
  host: '192.168.1.3',
  proxy: {
      host: '192.168.1.3',
      port: 3128
  },
  crossDomain: true
})

http.interceptors.request.use(function (config) {
  const token = sessionStorage.getItem('token')

  if (token != null) {
    config.headers.Authorization = `Bearer ${token}`
  } else if (route.history.current.name !== 'Login') {
    route.push('/login')
  }
  return config

}, function (err) {
  return Promise.reject(err)
})
// http.defaults.baseURL = 'https://api.example.com'
// http.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
export default http
