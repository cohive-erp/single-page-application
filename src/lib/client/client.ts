import axios from 'axios'

const api = axios.create({
  baseURL: 'https://backend-cohive.azurewebsites.net/',
})

export default api
