import { createSlice } from '@reduxjs/toolkit';

const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState: {
    leaderboard: [],
    searchTerm: '' // search term durumu
  },
  reducers: {
    setLeaderboard: (state, action) => {
      state.leaderboard = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    }
  }
});

export const { setLeaderboard, setSearchTerm } = leaderboardSlice.actions;
export default leaderboardSlice.reducer;
