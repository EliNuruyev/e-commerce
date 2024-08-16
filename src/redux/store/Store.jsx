import { configureStore } from '@reduxjs/toolkit'
import CategoriesSlice from '../slices/CategoriesSlice'
import ProductsSlice from '../slices/ProductsSlice'
import OffsetSlice from '../slices/OffsetSlice'


export const store = configureStore({
  reducer: {
    categories:CategoriesSlice,
    products:ProductsSlice,
    itemOffset:OffsetSlice,
  },
})