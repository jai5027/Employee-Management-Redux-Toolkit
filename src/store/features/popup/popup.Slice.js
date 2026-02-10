import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  employeepopup: false,
  deletepopup: false
}

export const popupSlice = createSlice({
  name: 'popuo',
  initialState,
  reducers: {
     openEmployeePopup: (state, action) => {
        state.employeepopup = action.payload ?? true
     },
     closeEmployeePopup: (state) => {
        state.employeepopup = false
     },
      openDeletePopup: (state, action) => {
        state.deletepopup = action.payload ?? true
     },
      closeDeletePopup: (state) => {
        state.deletepopup = false
     },
  }
})


export const { openEmployeePopup, closeEmployeePopup, openDeletePopup, closeDeletePopup } = popupSlice.actions

export default popupSlice.reducer