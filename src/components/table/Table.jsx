import { Tooltip } from 'antd'
import React, { useEffect } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'
import { GrView } from 'react-icons/gr'
import './style.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/slice/homeSlice'

const Table = () => {

   return (
      <div className="fui-table-ui-basic-linh table-wrap">
         <table>
            <thead>
               <tr>
                  <th>ID</th>
                  <th>Products 1</th>
                  <th>Amount</th>
                  <th>Value</th>
                  <th>Strategy A</th>
                  <th>Actions</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>1</td>
                  <td>Company Name</td>
                  <td className="pcs">457</td>
                  <td className="cur">6535178</td>
                  <td className="per">50,71</td>
                  <td className="actions">
                     <Tooltip placement="bottom" title={'edit'}>
                        <FiEdit />
                     </Tooltip>
                     <Tooltip placement="bottom" title={'delete'}>
                        <AiOutlineDelete />
                     </Tooltip>
                     <Tooltip placement="bottom" title={'view'}>
                        <GrView />
                     </Tooltip>
                  </td>
               </tr>
               <tr>
                  <td>2</td>
                  <td>Company Name</td>
                  <td className="pcs">457</td>
                  <td className="cur">6535178</td>
                  <td className="per">50,71</td>
                  <td className="actions">
                     <Tooltip placement="bottom" title={'edit'}>
                        <FiEdit className="icon-action" />
                     </Tooltip>
                     <Tooltip placement="bottom" title={'delete'}>
                        <AiOutlineDelete className="icon-action" />
                     </Tooltip>
                     <Tooltip placement="bottom" title={'view'}>
                        <GrView className="icon-action" />
                     </Tooltip>
                  </td>
               </tr>
               <tr>
                  <td>3</td>
                  <td>Company Name</td>
                  <td className="pcs">457</td>
                  <td className="cur">6535178</td>
                  <td className="per">50,71</td>
                  <td className="actions">
                     <Tooltip placement="bottom" title={'edit'}>
                        <FiEdit />
                     </Tooltip>
                     <Tooltip placement="bottom" title={'delete'}>
                        <AiOutlineDelete />
                     </Tooltip>
                     <Tooltip placement="bottom" title={'view'}>
                        <GrView />
                     </Tooltip>
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   )
}

export default Table
