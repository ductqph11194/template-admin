import { configureStore } from '@reduxjs/toolkit'
import homeSlice from '../slice/homeSlice'
import productSlice from '../slice/productSlice'
import categorySlice from '../slice/caregorySlice'

const store = configureStore({
   reducer: {
      home: homeSlice.reducer,
      product: productSlice.reducer,
      category: categorySlice.reducer,
   },
})

export default store
