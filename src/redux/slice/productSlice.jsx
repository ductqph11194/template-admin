import { createAsyncThunk } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import ProductApi from '../../apis/ProductApi'

export const getProducts = createAsyncThunk('home/getProduct', async () => {
   const listProduct = await ProductApi.getProduct()
   return listProduct
})

const productSlice = createSlice({
   name: 'home',
   initialState: {
      loadingProduct: false,
      listProducts: [],
   },
   reducers: {},
   extraReducers: {
      [getProducts.pending]: (state) => {
         state.loadingHome = true
      },
      [getProducts.rejected]: (state) => {
         state.loadingHome = false
      },
      [getProducts.fulfilled]: (state, action) => {
         state.loadingHome = false
         state.listProducts = action.payload.data
      },
   },
})

// const { reducer: homeReducer } = productSlice
export default productSlice
