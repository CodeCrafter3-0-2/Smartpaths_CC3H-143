// Error handling utilities
export const handleApiError = (error) => {
  if (error.response) {
    // Server responded with error status
    const { status, data } = error.response;
    switch (status) {
      case 400:
        return data.message || 'Bad Request';
      case 401:
        return 'Unauthorized - Please login again';
      case 403:
        return 'Forbidden - You do not have permission';
      case 404:
        return 'Not Found';
      case 422:
        return data.message || 'Validation Error';
      case 500:
        return 'Internal Server Error';
      default:
        return data.message || 'An error occurred';
    }
  } else if (error.request) {
    // Network error
    return 'Network Error - Please check your connection';
  } else {
    // Other error
    return error.message || 'An unexpected error occurred';
  }
};

export const isValidationError = (error) => {
  return error.response?.status === 422;
};

export const getValidationErrors = (error) => {
  return error.response?.data?.errors || {};
};
