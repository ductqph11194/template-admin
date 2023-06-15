import { Pagination } from 'antd'
import React, { useState } from 'react'
import './style.scss'
const PaginationCom = () => {
   const [current, setCurrent] = useState(1)
   const onChange = (page) => {
      console.log(page)
      setCurrent(page)
   }
   return <Pagination current={current} onChange={onChange} total={50} />
}

export default PaginationCom
