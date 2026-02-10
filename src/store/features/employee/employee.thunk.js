import { createAsyncThunk } from "@reduxjs/toolkit";
import api from '../../../config/axioxinstance'

export const getEmployee = createAsyncThunk(
    'employee',
    async () => {
    const respones = api.get('employee')
    console.log(respones);
    
    }
)