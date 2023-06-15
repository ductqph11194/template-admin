import { createAsyncThunk } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import HomeApi from '../../apis/HomeApi'

export const getBanner = createAsyncThunk('home/getBanner', async () => {
   const listImageBanner = await HomeApi.getBanner()
   return listImageBanner
})

const homeSlice = createSlice({
   name: 'home',
   initialState: {
      loadingHome: false,
      listBanner: [],
   },
   reducers: {},
   extraReducers: {
      [getBanner.pending]: (state) => {
         state.loadingHome = true
      },
      [getBanner.rejected]: (state) => {
         state.loadingHome = false
      },
      [getBanner.fulfilled]: (state, action) => {
         state.loadingHome = false
         state.listBanner = action.payload.data
      },
   },
})

// const { reducer: homeReducer } = homeSlice
export default homeSlice
