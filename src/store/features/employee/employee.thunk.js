import { createAsyncThunk } from "@reduxjs/toolkit";
import api from '../../../config/axioxinstance'

export const getEmployee = createAsyncThunk(
    'employee/getEmployee',
    async (_, {rejectWithValue}) => {
    try {    
    const respones = await api.get('employee')
    return respones.data
    } catch (error) {
        return rejectWithValue('Something went wrong')
    }
    }
)

export const postEmployee = createAsyncThunk(
    'employee/postEmployee',
    async (details, {rejectWithValue, dispatch}) => {
    try {    
    const respones = await api.post('employee', details)
    dispatch(getEmployee())
    return respones.data
    } catch (error) {
        return rejectWithValue('Something went wrong')
    }
    }
)

export const deleteEmployee = createAsyncThunk(
    'employee/deteleEmployee',
    async (id, {rejectWithValue, dispatch}) => {
    try {    
    const respones = await api.delete(`employee/${id}`)
    dispatch(getEmployee())
    return respones.data
    } catch (error) {
        return rejectWithValue('Something went wrong')
    }
    }
)


export const updateEmployee = createAsyncThunk(
    'employee/updateEmployee',
    async ({id, details}, {rejectWithValue, dispatch}) => {
        console.log(id, details);
        
    try {    
    const respones = await api.put(`employee/${id}`, details)
    dispatch(getEmployee())
    return respones.data
    } catch (error) {
        return rejectWithValue('Something went wrong')
    }
    }
)