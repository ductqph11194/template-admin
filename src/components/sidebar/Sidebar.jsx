import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { listSideBar } from './listSidebar'
import './style.scss'

const Sidebar = () => {
   return (
      <div className="sidebar">
         <div className="top">
            <span className="logo">
               <Link to="/">
                  <img src={logo} alt="" />
               </Link>
            </span>
         </div>
         <div className="center">
            <ul>
               <p className="title">Dashboard</p>
               <NavLink to="/" style={{ textDecoration: 'none' }}>
                  <li>
                     <HomeOutlinedIcon className="icon" />
                     <span>Dashboard</span>
                  </li>
               </NavLink>
               <p className="title">Manages</p>
               {listSideBar &&
                  listSideBar.map((item, index) => (
                     <NavLink to={item?.path} key={item.title} style={{ textDecoration: 'none' }}>
                        <li>
                           {item.icon()}
                           <span>{item.title}</span>
                        </li>
                     </NavLink>
                  ))}
               <NavLink to="/logout" style={{ textDecoration: 'none' }}>
                  <li>
                     <ExitToAppIcon className="icon" />
                     <span>Logout</span>
                  </li>
               </NavLink>
            </ul>
         </div>
         <div className="bottom"></div>
      </div>
   )
}

export default Sidebar
