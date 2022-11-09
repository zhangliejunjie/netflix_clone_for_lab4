import { configureStore } from '@reduxjs/toolkit'
import notificationSlice from '../store/slices/notificationSlice'
import accountSlice from '../store/slices/accountSlice'



export const store = configureStore({
    reducer: {
        notification: notificationSlice,
        accounts: accountSlice,
    },
})