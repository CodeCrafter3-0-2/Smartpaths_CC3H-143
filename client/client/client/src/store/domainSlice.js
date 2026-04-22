import { createSlice } from '@reduxjs/toolkit';

const domainSlice = createSlice({
  name: 'domain',
  initialState: {
    domains: [],
    currentDomain: null,
    loading: false,
    error: null,
  },
  reducers: {
    fetchDomainsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchDomainsSuccess: (state, action) => {
      state.loading = false;
      state.domains = action.payload;
      state.error = null;
    },
    fetchDomainsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    setCurrentDomain: (state, action) => {
      state.currentDomain = action.payload;
    },
    clearDomains: (state) => {
      state.domains = [];
      state.currentDomain = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  fetchDomainsStart,
  fetchDomainsSuccess,
  fetchDomainsFailure,
  setCurrentDomain,
  clearDomains,
} = domainSlice.actions;

export default domainSlice.reducer;
