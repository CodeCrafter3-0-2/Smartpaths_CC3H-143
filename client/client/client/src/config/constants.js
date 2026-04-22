// API Endpoints Constants
export const API_ENDPOINTS = {
  // Auth
  AUTH: {
    REGISTER: '/auth/register',
    REGISTER_ADMIN: '/auth/register/admin',
    LOGIN: '/auth/login',
    CHECK_ADMIN_EXISTS: '/auth/check-admin-exists',
    ME: '/auth/me',
  },
  // Users
  USERS: {
    PROFILE: '/users/profile',
    UPDATE_PROFILE: '/users/profile',
    UPDATE_PROGRESS: '/users/progress',
    UPDATE_DOMAIN: '/users/domain',
    STATS: '/users/stats',
    DASHBOARD: '/users/dashboard',
  },
  // Domains
  DOMAINS: {
    GET_ALL: '/domains',
    PAGINATED: '/domains/paginated',
    SEARCH: '/domains/search',
    TOP: '/domains/top',
    DETAILS: '/domains',
    STATS: '/domains',
    CREATE: '/domains',
  },
  // Quiz
  QUIZ: {
    QUESTIONS: '/quiz/questions',
    ALL_QUESTIONS: '/quiz/questions/all',
    RANDOM_QUESTIONS: '/quiz/questions/random',
    SUBMIT: '/quiz/submit',
    LATEST_RESULT: '/quiz/results/latest',
  },
  // Roadmaps
  ROADMAPS: {
    BY_DOMAIN: '/roadmaps/domain',
    GET_BY_ID: '/roadmaps',
    DETAILED: '/roadmaps',
    PROGRESS: '/roadmaps',
  },
  // Resources
  RESOURCES: {
    ALL: '/resources',
    BY_DOMAIN: '/resources/domain',
    FREE: '/resources/domain',
    TOP_RATED: '/resources/top-rated',
    SEARCH: '/resources/search',
    FILTER: '/resources/filter',
    RATE: '/resources',
  },
  // Community Posts
  POSTS: {
    CREATE: '/community/posts',
    GET_ALL: '/community/posts',
    BY_CATEGORY: '/community/posts/category',
    SEARCH: '/community/posts/search',
    PINNED: '/community/posts/pinned',
    MY_POSTS: '/community/posts/my-posts',
    LIKE: '/community/posts',
  },
  // Comments
  COMMENTS: {
    ADD: '/community/comments',
    BY_POST: '/community/comments/post',
    PAGINATED: '/community/comments/post',
    UPDATE: '/community/comments',
    DELETE: '/community/comments',
    LIKE: '/community/comments',
  },
  // Chat
  CHAT: {
    ROOM: '/chat/room',
    SEND: '/chat/send',
    ROOMS: '/chat/rooms',
    MESSAGES: '/chat/messages',
    MARK_READ: '/chat/mark-read',
    UNREAD_COUNT: '/chat/unread-count',
  },
  // Admin
  ADMIN: {
    DASHBOARD_STATS: '/admin/dashboard/stats',
    HEALTH: '/admin/system/health',
  },
};
