import { createSlice } from '@reduxjs/toolkit'
import { getEmployee, updateEmployee } from './employee.thunk'
import { postEmployee } from './employee.thunk'
import { deleteEmployee } from './employee.thunk'

const initialState = {
      employees: [],
      loading: false,
      error: null
}

const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducer:{},
    extraReducers: (builder) => {
      builder.addCase(getEmployee.pending, (state) => {
         state.loading = true
         state.error = null
      })
        builder.addCase(getEmployee.fulfilled, (state, action) => {
         state.employees = action.payload
         state.loading = false
      })
        builder.addCase(getEmployee.rejected, (state, action) => {
         state.loading = false
         state.error = action.payload
      })
       // POST EMPLOYEE

        builder.addCase(postEmployee.pending, (state) => {
         state.loading = true
         state.error = null
      })
        builder.addCase(postEmployee.fulfilled, (state) => {
         state.loading = false
      })
        builder.addCase(postEmployee.rejected, (state, action) => {
         state.loading = false
         state.error = action.payload
      })

      // DELETE EMPLOYEE

       builder.addCase(deleteEmployee.pending, (state) => {
         state.loading = true
         state.error = null
      })
        builder.addCase(deleteEmployee.fulfilled, (state) => {
         state.loading = false
      })
        builder.addCase(deleteEmployee.rejected, (state, action) => {
         state.loading = false
         state.error = action.payload
      })

      // UPDATE EMPLOYEE

       builder.addCase(updateEmployee.pending, (state) => {
         state.loading = true
         state.error = null
      })
        builder.addCase(updateEmployee.fulfilled, (state) => {
         state.loading = false
      })
        builder.addCase(updateEmployee.rejected, (state, action) => {
         state.loading = false
         state.error = action.payload
      })
    }    
})

export const { } = employeeSlice.actions

export default employeeSlice.reducer