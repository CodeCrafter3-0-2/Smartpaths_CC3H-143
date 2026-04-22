import { createSlice } from '@reduxjs/toolkit';

const resourceSlice = createSlice({
  name: 'resource',
  initialState: {
    resources: [],
    filteredResources: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchResourcesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchResourcesSuccess: (state, action) => {
      state.loading = false;
      state.resources = action.payload;
      state.error = null;
    },
    fetchResourcesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    filterResources: (state, action) => {
      state.filteredResources = action.payload;
    },
    clearResources: (state) => {
      state.resources = [];
      state.filteredResources = [];
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  fetchResourcesStart,
  fetchResourcesSuccess,
  fetchResourcesFailure,
  filterResources,
  clearResources,
} = resourceSlice.actions;

export default resourceSlice.reducer;
