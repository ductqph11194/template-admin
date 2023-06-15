import axios from 'axios'
const instance = axios.create({
   baseURL: 'https://portal.smiletech.vn/api/v1/',
   timeout: 10000,
   headers: {
      'Content-Type': 'application/json',
   },
})

instance.interceptors.response.use(
   (response) => {
      // Xử lý dữ liệu trả về nếu cần
      if (response && response.data) {
         return response.data
      }
      return response.data
   },
   (error) => {
      console.error('Error:', error)
      return Promise.reject(error)
   }
)

instance.interceptors.request.use((config) => {
   // Lấy token xác thực từ localStorage hoặc từ Redux store
   const token = localStorage.getItem('token') || null
   if (token) {
      config.headers.Authorization = `Bearer ${token}`
   }
   return config
})

export default instance
