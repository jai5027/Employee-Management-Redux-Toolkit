import { configureStore } from '@reduxjs/toolkit'
import popupReducer from '../store/features/popup/popup.Slice'
import employeeReducer from '../store/features/employee/employee.Slice'
export const store = configureStore({
  reducer: {
       popup: popupReducer,
       employee: employeeReducer,
  },
})