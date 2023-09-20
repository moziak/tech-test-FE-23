import { configureStore } from '@reduxjs/toolkit';
import payoutReducer from './features/payouts/payoutSlice'
export const store = configureStore({
  reducer: {
    payout: payoutReducer
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;