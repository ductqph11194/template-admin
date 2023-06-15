// import { useEffect, useState } from 'react'
// import './style.scss'

// const useYouTubeLoading = (apiFunc) => {
//    const [isLoading, setIsLoading] = useState(true)
//    const [error, setError] = useState(null)

//    useEffect(() => {
//       // const timer = setTimeout(() => {
//       //    setIsLoading(false) // Sau 2 giây, đặt isLoading thành false để kết thúc hiệu ứng loading
//       // }, 1000)
//       // return () => clearTimeout(timer) // Dọn dẹp timer khi component unmount
//       const fetchData = async () => {
//          try {
//             const response = await apiFunc()
//             setIsLoading(false)
//          } catch (err) {
//             setError(err)
//             setIsLoading(false)
//          }
//       }
//       fetchData()
//    }, [apiFunc])

//    return { isLoading, error }
// }

// export default useYouTubeLoading
