import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined'
import React, { useEffect } from 'react'
import './style.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getBanner } from '../../redux/slice/homeSlice'
import HomeApi from '../../apis/HomeApi'
import useYouTubeLoading from '../../hooks/loading/useYouTubeLoading'
const Widget = ({ title, price, desc, background }) => {
   const dispatch = useDispatch()
   const { listBanner } = useSelector((state) => state.home)
   useEffect(() => {
      dispatch(getBanner())
   }, [])
   const { isLoading, error } = useYouTubeLoading(HomeApi.getBanner)
   if (error) {
      return <div>Đã xảy ra lỗi: {error.message}</div>
   }
   const style = {
      background: background,
   }
   console.log('listBanner', listBanner)
   return (
      <>
         {isLoading && <div className="loading-bar" />}
         <div className="widget" style={style}>
            <div className="left">
               <span className="title">{title}</span>
               <span className="counter">{price} $</span>
               <span className="link">{desc}</span>
            </div>
            <div className="right">
               <div className="percentage positive">
                  <TrendingUpOutlinedIcon />
               </div>
            </div>
         </div>
      </>
   )
}

export default Widget
