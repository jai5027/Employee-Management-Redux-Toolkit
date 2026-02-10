import { createSlice } from '@reduxjs/toolkit'
import { getEmployee } from './employee.thunk'

const initialState = {
      employees: [],
      loading: false,
      error: null
}

const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducer:{
    extraReducers: (builder) => {
      builder.addCase(getEmployee.pending)
    }  
    }
})

export const { } = employeeSlice.actions

export default employeeSlice.reducer