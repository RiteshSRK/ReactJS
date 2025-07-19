import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './reducers/UserReducer'

// And This the Global State ( Idher se hi sara Data bheja jayega)

export const store = configureStore({
  reducer: {
    UserReducer: UserReducer
  },
})