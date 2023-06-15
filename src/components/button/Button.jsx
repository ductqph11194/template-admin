import React from 'react'
import { PlusOutlined } from '@ant-design/icons'
import { BiLogOut } from 'react-icons/bi'
import './style.scss'
const CustomButton = ({ label, onClick, color, size, icon, type }) => {
   const buttonStyles = {
      backgroundColor: color,
      padding: size === 'large' ? '16px 28px' : '8px 16px',
      border: 'none',
      borderRadius: '10px',
      color: '#fff',
      cursor: 'pointer',
      fontSize: size === 'large' ? '20px' : '15px',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      justifyContent: "center"   
   }
   const iconStyles = {
      marginRight: '6px',
      color: '#fff',
      fontWeight: '600',
   }
   const renderIcon = () => {
      if (icon === 'add') {
         return <PlusOutlined size={24} style={iconStyles} />
      } else if (icon === 'logout') {
         return <BiLogOut size={24} style={iconStyles} />
      } else {
         return null
      }
   }

   return (
      <button className="form-btn" style={buttonStyles} onClick={onClick} type={type}>
         {renderIcon()}
         {label}
      </button>
   )
}

export default CustomButton
