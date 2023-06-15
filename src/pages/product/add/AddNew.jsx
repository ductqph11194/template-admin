import { yupResolver } from '@hookform/resolvers/yup'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined'
import { Button, Input, Select, Upload } from 'antd'
import ImgCrop from 'antd-img-crop'
import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useLocation, useParams } from 'react-router-dom'
import * as yup from 'yup'
import Layout from '../../../layout/Layout'
import './style.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getCategory } from '../../../redux/slice/caregorySlice'
const { TextArea } = Input

const AddNew = () => {
   const { id } = useParams()
   const location = useLocation()
   const titleList = location.pathname.slice(1)
   const breadCrum = titleList.split('/')

   const onSearch = (value) => {
      console.log('search:', value)
   }

   const dispatch = useDispatch()
   const { listCategory } = useSelector((state) => state.category)
   useEffect(() => {
      dispatch(getCategory())
   }, [])
   console.log('category', listCategory)
   const schema = yup
      .object({
         product: yup.string().required('Product is required'),
         category: yup.string().required('Category is required'),
         description: yup.string().required('Description is required'),
         image: yup.object().required('Image is required'),
      })
      .required()
   const {
      control,
      handleSubmit,
      formState: { errors },
   } = useForm({
      resolver: yupResolver(schema),
      defaultValues: {
         product: '',
         category: '',
         description: '',
         image: {},
      },
   })
   function capitalizeFirstLetter(word) {
      return word.charAt(0).toUpperCase() + word.slice(1)
   }
   const [size, setSize] = useState('large')
   const [fileList, setFileList] = useState([])

   const onChange = ({ fileList: newFileList }) => {
      setFileList(newFileList)
   }

   const onPreview = async (file) => {
      let src = file.url
      if (!src) {
         src = await new Promise((resolve) => {
            const reader = new FileReader()
            reader.readAsDataURL(file.originFileObj)
            reader.onload = () => resolve(reader.result)
         })
      }
      const image = new Image()
      image.src = src
      const imgWindow = window.open(src)
      imgWindow?.document.write(image.outerHTML)
   }
   const onSubmit = (data) => {
      console.log('Dữ liệu biểu mẫu đã được xác thực và gửi đi:', data)
   }

   return (
      <Layout>
         <div className="add-products">
            <div className="header-add">
               <div className="bread-crum">
                  <HomeOutlinedIcon className="icon" onClick={() => navigate('/')} />
                  {'Home'}
                  <NavigateNextOutlinedIcon className="icon" />
                  {breadCrum.map((item, index) => (
                     <div key={index} className="sub-breadCrum">
                        {capitalizeFirstLetter(item)}
                        <NavigateNextOutlinedIcon className="icon" />
                     </div>
                  ))}
               </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
               <div className="content-add-product">
                  <div className="content-product-left">
                     <div className="input">
                        <div className="title">Product name</div>
                        <Controller
                           name={'product'}
                           control={control}
                           render={({ field }) => (
                              <Input
                                 className="input-product"
                                 placeholder={'Please typing your product name...'}
                                 {...field}
                                 control={control}
                              />
                           )}
                        ></Controller>
                        <p className="error">{errors.product?.message}</p>
                     </div>
                     <div className="category">
                        <div className="title">Category</div>
                        <Controller
                           control={control}
                           name="category"
                           render={({ field }) => (
                              <Select
                                 {...field}
                                 control={control}
                                 style={{ width: '300px' }}
                                 size="large"
                                 placeholder="Select a category"
                                 options={[
                                    {
                                       value: 'jack',
                                       label: 'Jack',
                                    },
                                    {
                                       value: 'lucy',
                                       label: 'Lucy',
                                    },
                                    {
                                       value: 'tom',
                                       label: 'Tom',
                                    },
                                 ]}
                              />
                           )}
                        ></Controller>
                        <p className="error">{errors.category?.message}</p>
                     </div>
                     <div className="description">
                        <div className="title">Description</div>
                        <Controller
                           name="description"
                           control={control}
                           render={({ field }) => <TextArea rows={8} {...field} placeholder="Description of product ..." />}
                        ></Controller>
                        <p className="error">{errors.description?.message}</p>
                     </div>
                  </div>
                  <div className="content-product-right">
                     <div className="title">Product images </div>
                     <div className="content-right">
                        <ImgCrop rotationSlider className="upload">
                           <Controller
                              control={control}
                              name="image"
                              render={({ filed }) => (
                                 <Upload
                                    {...filed}
                                    action="https://portal.smiletech.vn/api/v1/file/upload-single"
                                    listType="picture-card"
                                    fileList={fileList}
                                    onChange={onChange}
                                    onPreview={onPreview}
                                 >
                                    {fileList.length < 5 && '+ Upload'}
                                 </Upload>
                              )}
                           ></Controller>
                        </ImgCrop>
                        <p className="error">{errors.image?.message}</p>

                        <div className="btn">
                           <Button type="primary" size={size} htmlType="submit">
                              {id ? 'Update Product' : 'Add Product'}
                           </Button>
                        </div>
                     </div>
                  </div>
               </div>
            </form>
         </div>
      </Layout>
   )
}

export default AddNew
