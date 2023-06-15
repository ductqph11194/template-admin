import { createAsyncThunk } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import CategoryApi from '../../apis/Category'

export const getCategory = createAsyncThunk('category/getCategory', async () => {
   const listCategory = await CategoryApi.getCategory()
   return listCategory
})

const categorySlice = createSlice({
   name: 'category',
   initialState: {
      loadingCategory: false,
      listCategory: [],
   },
   reducers: {},
   extraReducers: {
      [getCategory.pending]: (state) => {
         state.loadingCategory = true
      },
      [getCategory.rejected]: (state) => {
         state.loadingCategory = false
      },
      [getCategory.fulfilled]: (state, action) => {
         state.loadingCategory = false
         state.listCategory = action.payload.data
      },
   },
})

// const { reducer: homeReducer } = productSlice
export default categorySlice
