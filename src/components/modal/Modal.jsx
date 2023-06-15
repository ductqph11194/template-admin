import React from 'react'
import { Modal } from 'antd'
import './style.scss'
const CustomModal = ({ isOpen, onClose, title, children, footer, top, left, width }) => {
   // props button
   //    footer={[
   //          <Button key="close" onClick={handleModalClose}>
   //          Close
   //       </Button>,
   //    ]}
   return (
      <Modal
         style={{ top: top, left: left }}
         open={isOpen}
         onCancel={onClose}
         onOk={onClose}
         footer={footer ? footer : null}
         closable={true}
         centered
         maskClosable={true}
         width={width}
         title={title}
      >
         {children}
      </Modal>
   )
}

export default CustomModal
