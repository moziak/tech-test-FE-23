import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import AxiosInstance from "../../../config/axiosConfig";
import { Metadata, PayoutDto, PayoutResponse } from "./types";

type InitialState = {
  loading: boolean,
  payouts: PayoutDto[],
  metadata: Metadata| null,
  error: string
};

const initialState: InitialState = {
  loading: true,
  payouts: [],
  metadata: null,
  error: ''
};

export const fetchPayouts = createAsyncThunk('payout/fetchPayouts', async () => {
  return (await AxiosInstance.get<PayoutResponse>('/payouts')).data;
})

export const searchPayouts = createAsyncThunk('payout/searchPayouts', async (username: string) => {
  return (await AxiosInstance
    .get<PayoutDto[]>(`/search?query=${username}`)).data;
  
})

const payoutSlice = createSlice({
  name: 'payout',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPayouts.pending, state => {
      state.loading = true
    })
    builder.addCase(
      fetchPayouts.fulfilled,
      (state, action: PayloadAction<PayoutResponse>) => {
        state.loading = false
        state.payouts = action.payload.data
        state.metadata = action.payload.metadata
        state.error = ''
      }
    )
    builder.addCase(fetchPayouts.rejected, (state, action) => {
      state.loading = false
      state.payouts = []
      state.error = action.error.message || 'Something went wrong'
    })

    builder.addCase(searchPayouts.pending, state => {
      state.loading = true
    })
    builder.addCase(
      searchPayouts.fulfilled,
      (state, action: PayloadAction<PayoutDto[]>) => {
        state.loading = false
        state.payouts = action.payload
        state.metadata = null
        state.error = ''
      }
    )
    builder.addCase(searchPayouts.rejected, (state, action) => {
      state.loading = false
      state.payouts = []
      state.error = action.error.message || 'Something went wrong'
    })
  }
  
})



export default payoutSlice.reducer