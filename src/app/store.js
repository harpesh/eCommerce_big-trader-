import { configureStore } from '@reduxjs/toolkit'
import { cartReducer} from '../redux/counterSlice'

export default configureStore({
  reducer: {
    cart:cartReducer
  }
})