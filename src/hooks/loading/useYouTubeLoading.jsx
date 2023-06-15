import { useEffect, useState } from 'react'
import './style.scss'

const useYouTubeLoading = (apiFunc) => {
   const [isLoading, setIsLoading] = useState(true)
   const [error, setError] = useState(null)

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await apiFunc()
            setIsLoading(false)
         } catch (err) {
            setError(err)
            setIsLoading(false)
         }
      }
      fetchData()
   }, [apiFunc])

   return { isLoading, error }
}

export default useYouTubeLoading
/** using
 *    const { isLoading, error } = useYouTubeLoading(HomeApi.getBanner)
   if (error) {
      return <div>Đã xảy ra lỗi: {error.message}</div>
   }
   console.log('listBanner', listBanner)
   return (
      <>
         {isLoading && <div className="loading-bar" />}
 */
