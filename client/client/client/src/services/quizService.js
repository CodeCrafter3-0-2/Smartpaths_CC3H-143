import api from '../config/api';
import { API_ENDPOINTS } from '../config/constants';

export const quizService = {
  // Get active questions
  getQuestions: async () => {
    const response = await api.get(API_ENDPOINTS.QUIZ.QUESTIONS);
    return response.data;
  },

  // Get all questions (admin)
  getAllQuestions: async () => {
    const response = await api.get(API_ENDPOINTS.QUIZ.ALL_QUESTIONS);
    return response.data;
  },

  // Get random questions
  getRandomQuestions: async (limit = 10) => {
    const response = await api.get(${API_ENDPOINTS.QUIZ.RANDOM_QUESTIONS}?limit=);
    return response.data;
  },

  // Submit quiz
  submitQuiz: async (submissionData) => {
    const response = await api.post(API_ENDPOINTS.QUIZ.SUBMIT, submissionData);
    return response.data;
  },

  // Get latest result
  getLatestResult: async () => {
    const response = await api.get(API_ENDPOINTS.QUIZ.LATEST_RESULT);
    return response.data;
  },
};
