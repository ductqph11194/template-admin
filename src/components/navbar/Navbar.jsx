import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import PersonIcon from '@mui/icons-material/Person'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import { Popover } from 'antd'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Search from '../search/Search'
import avt from '../../assets/avttt.png'
import './style.scss'
const Navbar = () => {
   const { control, handleSubmit } = useForm()
   const navigate = useNavigate()
   const handleLogout = () => {
      navigate('/')
   }
   const content = (
      <div className="content-width">
         <div className="content-noti">
            <h3>All Notification</h3>
            <p>Mask as all read</p>
         </div>
         <h3>Tất cả</h3>
         <div className="notification">
            <div className="notification-item">
               <img src={avt} alt="" className="img" />
               <div className="description">
                  <span>SmileTech </span> đã chấp nhận lời mời kết bạn của bạn.
               </div>
            </div>
            <div className="notification-item">
               <img src={avt} alt="" className="img" />
               <div className="description">
                  <span>SmileTech </span> đã chấp nhận lời mời kết bạn của bạn.
               </div>
            </div>
            <div className="notification-item">
               <img src={avt} alt="" className="img" />
               <div className="description">
                  <span>SmileTech </span> đã chấp nhận lời mời kết bạn của bạn.
               </div>
            </div>
            <div className="notification-item">
               <img src={avt} alt="" className="img" />
               <div className="description">
                  <span>SmileTech </span> đã chấp nhận lời mời kết bạn của bạn.
               </div>
            </div>
            <div className="notification-item">
               <img src={avt} alt="" className="img" />
               <div className="description">
                  <span>SmileTech </span> đã chấp nhận lời mời kết bạn của bạn.
               </div>
            </div>
            <div className="notification-item">
               <img src={avt} alt="" className="img" />
               <div className="description">
                  <span>SmileTech </span> đã chấp nhận lời mời kết bạn của bạn.
               </div>
            </div>
            <div className="notification-item">
               <img src={avt} alt="" className="img" />
               <div className="description">
                  <span>SmileTech </span> đã chấp nhận lời mời kết bạn của bạn.đã chấp nhận lời mời kết bạn của bạnđã chấp nhận lời mời kết
                  bạn của bạnđã chấp nhận lời mời kết bạn của bạn
               </div>
            </div>
            <div className="notification-item">
               <img src={avt} alt="" className="img" />
               <div className="description">
                  <span>SmileTech </span> đã chấp nhận lời mời kết bạn của bạn.
               </div>
            </div>
            <div className="notification-item">
               <img src={avt} alt="" className="img" />
               <div className="description">
                  <span>SmileTech </span> đã chấp nhận lời mời kết bạn của bạn.
               </div>
            </div>
         </div>
      </div>
   )

   const contentProfile = (
      <div className="content-profile">
         <div className="content-noti">
            <p className="desc">
               <span>Good Morning</span> , admin SmileTech
            </p>
            <p>Project admin</p>
         </div>

         <ul>
            <li>
               <PersonIcon className="icon" />
               <span>Manage users</span>
            </li>
            <li onClick={handleLogout}>
               <ExitToAppIcon className="icon" />
               <span>Logout</span>
            </li>
         </ul>
      </div>
   )

   return (
      <div className="navbar">
         <div className="wrapper">
            <Search />
            <div className="items">
               <Popover trigger={'click'} placement="bottomRight" content={content}>
                  <div className="item noti">
                     <NotificationsNoneOutlinedIcon className="icon" />
                  </div>
               </Popover>

               <Popover trigger={'click'} placement="bottomRight" content={contentProfile}>
                  <div className="item avt">
                     <img src={avt} alt="" className="avatar" />
                     <SettingsOutlinedIcon className="setting" />
                  </div>
               </Popover>
            </div>
         </div>
      </div>
   )
}

export default Navbar
