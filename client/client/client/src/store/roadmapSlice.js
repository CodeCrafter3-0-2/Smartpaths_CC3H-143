import { createSlice } from '@reduxjs/toolkit';

const roadmapSlice = createSlice({
  name: 'roadmap',
  initialState: {
    roadmaps: [],
    currentRoadmap: null,
    progress: null,
    loading: false,
    error: null,
  },
  reducers: {
    fetchRoadmapsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchRoadmapsSuccess: (state, action) => {
      state.loading = false;
      state.roadmaps = action.payload;
      state.error = null;
    },
    fetchRoadmapsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    setCurrentRoadmap: (state, action) => {
      state.currentRoadmap = action.payload;
    },
    fetchProgressStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchProgressSuccess: (state, action) => {
      state.loading = false;
      state.progress = action.payload;
      state.error = null;
    },
    fetchProgressFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearRoadmapData: (state) => {
      state.roadmaps = [];
      state.currentRoadmap = null;
      state.progress = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  fetchRoadmapsStart,
  fetchRoadmapsSuccess,
  fetchRoadmapsFailure,
  setCurrentRoadmap,
  fetchProgressStart,
  fetchProgressSuccess,
  fetchProgressFailure,
  clearRoadmapData,
} = roadmapSlice.actions;

export default roadmapSlice.reducer;
