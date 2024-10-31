import { configureStore } from '@reduxjs/toolkit';
import leaderboardSlice from './leaderboardSlice';

export const store = configureStore({
  reducer: {
    leaderboard: leaderboardSlice,
  },
});
