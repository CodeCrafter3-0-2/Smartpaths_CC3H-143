import { createSlice } from '@reduxjs/toolkit';

const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    questions: [],
    currentQuiz: null,
    results: null,
    loading: false,
    error: null,
  },
  reducers: {
    fetchQuestionsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchQuestionsSuccess: (state, action) => {
      state.loading = false;
      state.questions = action.payload;
      state.error = null;
    },
    fetchQuestionsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    submitQuizStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    submitQuizSuccess: (state, action) => {
      state.loading = false;
      state.results = action.payload;
      state.error = null;
    },
    submitQuizFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    setCurrentQuiz: (state, action) => {
      state.currentQuiz = action.payload;
    },
    clearQuizData: (state) => {
      state.questions = [];
      state.currentQuiz = null;
      state.results = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  fetchQuestionsStart,
  fetchQuestionsSuccess,
  fetchQuestionsFailure,
  submitQuizStart,
  submitQuizSuccess,
  submitQuizFailure,
  setCurrentQuiz,
  clearQuizData,
} = quizSlice.actions;

export default quizSlice.reducer;
