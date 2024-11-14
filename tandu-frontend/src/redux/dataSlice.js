import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosRequest } from '../utils/util';

export const loadStatus = {
    None: 0,
    Loading: 1,
    Success: 2,
    Failed: 3
  }

  export const getCountries = createAsyncThunk('/countries', async (params, { rejectWithValue }) => {
    try {
      const response = await axiosRequest('/get-countries' );
      return response.data;
    } 
    catch (error) {
      return rejectWithValue(error?.response?.data?.message || error?.response || error);
    }
  });

  export const sendEmail = createAsyncThunk('/email', async (params, { rejectWithValue }) => {
    try{
      const response = await axiosRequest('/send-email', params);
      return response.data;
    }
    catch (error) {
      return rejectWithValue(error?.response?.data?.message || error?.response || error);
    }
  })
 
export const dataSlice = createSlice({
    name: 'data',
    initialState: {
      countries: [],
      loadCoutriesStatus: loadStatus.None,
      loadSendEmailStatus: loadStatus.None
    },
    reducers: {
      resetLoadCountriesStatus: (state,action)=>{
        state.countries = [];
        state.loadCoutriesStatus = loadStatus.None
      },
      resetLoadEmailStatus: (state,action)=>{
        state.loadSendEmailStatus = loadStatus.None
      }
    },
    extraReducers:(builder) => {
      builder
      .addCase(getCountries.pending, (state,action)=>{
        state.loadCoutriesStatus = loadStatus.Loading;
      })
      .addCase(getCountries.fulfilled, (state,action)=>{
        state.countries = action.payload;
        state.loadCoutriesStatus = loadStatus.Success;
      })
      .addCase(getCountries.rejected,(state,action)=>{
        state.countries = [];
        state.loadCoutriesStatus = loadStatus.Failed
      })
      .addCase(sendEmail.pending, (state,action) => {
        state.loadSendEmailStatus = loadStatus.Loading;
      })
      .addCase(sendEmail.fulfilled, (state,action) => {
        state.loadSendEmailStatus = loadStatus.Success;
      })
      .addCase(sendEmail.rejected, (state,action)=>{
        state.loadSendEmailStatus = loadStatus.Failed;
      })
    }
})
export const {resetLoadCountriesStatus, resetLoadEmailStatus} = dataSlice.actions;
export default dataSlice.reducer;