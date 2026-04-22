# SmartPaths - Career Guidance Application

A modern React-based learning platform that helps users discover personalized learning pathways across multiple domains. Smart Paths provides an interactive interface for managing learning goals, taking assessments, and progressing through structured learning roadmaps.

## 🚀 Features

- **User Authentication**: Secure login and registration system
- **Interactive Dashboard**: Personalized learning overview and progress tracking
- **Domain Selection**: Browse and choose from multiple learning domains
- **Learning Roadmaps**: Structured learning paths with milestones and progress tracking
- **Quizzes**: Assessment tools to test knowledge and gauge readiness
- **User Profiles**: Manage personal information and learning preferences
- **Community**: Connect with other learners and share experiences
- **Real-time Notifications**: Toast notifications for user feedback using react-hot-toast
- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS
- **Protected Routes**: Secure authentication-based access control

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.5
- **Routing**: React Router DOM 7.14.1
- **Styling**: Tailwind CSS 3.4.19
- **HTTP Client**: Axios 1.15.1
- **Charting**: Recharts 3.8.1
- **Notifications**: React Hot Toast 2.6.0
- **Build Tool**: React Scripts 5.0.1
- **Testing**: Jest & React Testing Library

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## 💾 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables** (if needed)
   Create a `.env` file in the root directory and add any required API endpoints:
   ```
   REACT_APP_API_URL=http://localhost:5000
   ```

## ▶️ Running the Application

- **Development mode**
  ```bash
  npm start
  ```
  Opens [http://localhost:3000](http://localhost:3000) in your browser.

- **Production build**
  ```bash
  npm run build
  ```
  Builds the app for production to the `build` folder.

- **Run tests**
  ```bash
  npm test
  ```
  Launches the test runner in interactive watch mode.

## 📁 Project Structure

```
src/
├── App.js                          # Main application component with routing
├── App.css                         # Global styles
├── index.js                        # React entry point
├── index.css                       # Global CSS
├── components/
│   └── common/
│       ├── Navbar.jsx              # Navigation bar component
│       ├── Footer.jsx              # Footer component
│       ├── LoadingSpinner.jsx       # Loading state indicator
│       ├── ErrorBoundary.jsx        # Error handling wrapper
│       └── PrivateRoute.jsx         # Protected route component
├── context/
│   └── AuthContext.jsx             # Authentication context & provider
├── pages/
│   ├── HomePage.jsx                # Landing/home page
│   ├── AboutPage.jsx               # About page
│   ├── LoginPage.jsx               # User login
│   ├── RegisterPage.jsx            # User registration
│   ├── Dashboard.jsx               # User dashboard
│   ├── QuizPage.jsx                # Quiz/assessment interface
│   ├── DomainsPage.jsx             # Browse learning domains
│   ├── RoadmapPage.jsx             # Learning roadmap display
│   ├── ProfilePage.jsx             # User profile management
│   ├── Community.jsx               # Community interaction
│   └── Landing.jsx                 # Alternative landing page
└── public/
    ├── index.html                  # HTML template
    ├── manifest.json               # PWA manifest
    └── robots.txt                  # SEO robots file
```

## 🔐 Authentication

The application uses context-based authentication managed through `AuthContext`. Users must:
1. Register for a new account on the `/register` page
2. Log in with credentials on the `/login` page
3. Access protected routes only after successful authentication

Protected routes include:
- `/dashboard` - Personal learning dashboard
- `/quiz` - Assessment quizzes
- `/domains` - Domain selection
- `/roadmap/:domainId` - Learning roadmaps
- `/profile` - User profile
- `/community` - Community features

## 🎯 Usage

### Getting Started
1. Visit the home page and explore learning domains
2. Register for an account
3. Log in with your credentials
4. Take a quiz to assess your current knowledge
5. Select a learning domain from the domains page
6. Follow the structured learning roadmap
7. Track your progress on the dashboard

### Navigation
- **Navbar**: Primary navigation for accessing main features
- **Public Pages**: Accessible without authentication (Home, About, Login, Register)
- **Protected Pages**: Require authentication (Dashboard, Quiz, Domains, Roadmap, Profile, Community)

## 🧪 Testing

Tests are configured using Jest and React Testing Library. Run tests with:
```bash
npm test
```

Test files are located alongside components with `.test.js` extension.

## 🎨 Styling

The application uses Tailwind CSS for styling with the following configuration:
- Custom color schemes
- Responsive design utilities
- PostCSS for processing
- Autoprefixer for browser compatibility

Configure styles in:
- `tailwind.config.js` - Tailwind configuration
- `postcss.config.js` - PostCSS configuration
- Global styles in `src/index.css`

## 🔄 API Integration

The application communicates with a backend API using Axios. API calls are made from:
- Component lifecycle hooks
- Event handlers
- Context providers

Configure the API endpoint via `REACT_APP_API_URL` environment variable.

## 📊 Charts and Visualizations

Progress and analytics are displayed using Recharts. Charts are implemented in:
- Dashboard (progress overview)
- Roadmap pages (learning progress)
- Profile pages (achievement statistics)

## 🚨 Error Handling

- **ErrorBoundary**: Catches React component errors and displays fallback UI
- **Toast Notifications**: User feedback for success/error messages
- **Try-Catch Blocks**: Handle API errors gracefully

## 📦 Build and Deployment

1. **Create a production build**
   ```bash
   npm run build
   ```

2. **Test the production build locally**
   ```bash
   npm install -g serve
   serve -s build
   ```

3. **Deploy** to your hosting provider (Vercel, Netlify, GitHub Pages, etc.)

## 🤝 Contributing

Contributions are welcome! To contribute:
1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For issues, questions, or suggestions, please open an issue in the repository or contact the development team.

## 🗺️ Roadmap

- [ ] Offline support with service workers
- [ ] Mobile app (React Native)
- [ ] Advanced analytics dashboard
- [ ] Peer-to-peer learning features
- [ ] Gamification elements (badges, leaderboards)
- [ ] Integration with external learning resources
- [ ] Machine learning-based recommendation system

---

**Happy Learning! 🎓**

SmartPaths is a comprehensive career guidance platform built with Spring Boot that helps users discover their career paths through interactive quizzes, personalized roadmaps, learning resources, and community engagement.

## Table of Contents
- [Overview](#overview)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Configuration](#configuration)
- [API Documentation](#api-documentation)
- [Features in Detail](#features-in-detail)
- [Database Schema](#database-schema)
- [Security](#security)
- [Contributing](#contributing)

## Overview

SmartPaths provides a complete career guidance ecosystem where users can:
- Take career assessment quizzes to identify suitable career domains
- Follow personalized learning roadmaps with progress tracking
- Access curated learning resources and rate them
- Engage with a community through posts and comments
- Chat privately with other users
- Track their learning progress and achievements

The application includes both user-facing features and comprehensive admin tools for content management.

## Key Features

### 🔐 Authentication & User Management
- JWT-based authentication
- User registration and login
- Role-based access control (User/Admin)
- Profile management and progress tracking

### 📝 Career Assessment Quiz
- Interactive quiz with multiple-choice questions
- Career domain recommendations based on quiz results
- Quiz result history and progress tracking

### 🗺️ Learning Roadmaps
- Domain-specific learning paths
- Progress tracking for each roadmap
- Detailed subtopics and milestones

### 📚 Resource Library
- Curated learning resources (courses, articles, videos)
- Resource filtering and search
- User rating system
- Free vs. paid resource categorization

### 💬 Community Features
- Discussion forum with posts and comments
- Like system for posts and comments
- Post categorization and search
- User-generated content moderation

### 💻 Private Messaging
- Real-time chat between users
- Chat room management
- Unread message notifications

### 👨‍💼 Admin Dashboard
- User and content statistics
- CRUD operations for all entities
- System health monitoring
- Content moderation tools

## Technology Stack

- **Backend**: Spring Boot 3.1.5
- **Java Version**: 17
- **Database**: MySQL 8.0.33
- **Security**: Spring Security with JWT
- **ORM**: Spring Data JPA with Hibernate
- **Validation**: Bean Validation (Jakarta)
- **Build Tool**: Maven
- **Other**: Lombok for boilerplate reduction

## Prerequisites

- Java 17 or higher
- MySQL 8.0 or higher
- Maven 3.6 or higher
- Git

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd smartpaths
   ```

2. **Set up MySQL database:**
   - Create a database named `smartpaths`
   - Update database credentials in `src/main/resources/application.properties`

3. **Build the application:**
   ```bash
   ./mvnw clean install
   ```

4. **Run the application:**
   ```bash
   ./mvnw spring-boot:run
   ```

The application will start on `http://localhost:8082`

## Configuration

### Database Configuration
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/smartpaths?createDatabaseIfNotExist=true&useSSL=false&allowPublicKeyRetrieval=true
spring.datasource.username=root
spring.datasource.password=your_password
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
```

### JWT Configuration
```properties
jwt.secret=your_jwt_secret_key
jwt.expiration=86400000
```

### Admin Registration
```properties
admin.registration.secret=your_admin_secret_key
```

### Server Configuration
```properties
server.port=8082
```

## API Documentation

The API is organized into the following main endpoints:

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/register/admin` - Admin registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user info

### Quiz System
- `GET /api/quiz/questions` - Get active quiz questions
- `POST /api/quiz/submit` - Submit quiz answers
- `GET /api/quiz/results/latest` - Get latest quiz results
- `POST /api/quiz/questions` - Add quiz question (Admin)
- `PUT /api/quiz/questions/{id}` - Update quiz question (Admin)
- `DELETE /api/quiz/questions/{id}` - Delete quiz question (Admin)

### Roadmaps
- `GET /api/roadmaps/domain/{domainId}` - Get roadmaps by domain
- `GET /api/roadmaps/{id}` - Get roadmap details
- `GET /api/roadmaps/{id}/progress` - Get user progress on roadmap
- `POST /api/roadmaps/domain/{domainId}` - Create roadmap (Admin)
- `PUT /api/roadmaps/{id}` - Update roadmap (Admin)
- `DELETE /api/roadmaps/{id}` - Delete roadmap (Admin)

### Resources
- `GET /api/resources` - Get all resources
- `GET /api/resources/paginated` - Get resources with pagination
- `GET /api/resources/domain/{domainId}` - Get resources by domain
- `GET /api/resources/search` - Search resources
- `POST /api/resources/filter` - Filter resources
- `POST /api/resources/{id}/rate` - Rate a resource
- `POST /api/resources/domain/{domainId}` - Create resource (Admin)
- `PUT /api/resources/{id}` - Update resource (Admin)
- `DELETE /api/resources/{id}` - Delete resource (Admin)

### Community Posts
- `POST /api/community/posts` - Create post
- `GET /api/community/posts` - Get all posts
- `GET /api/community/posts/category/{category}` - Get posts by category
- `GET /api/community/posts/search` - Search posts
- `GET /api/community/posts/pinned` - Get pinned posts
- `GET /api/community/posts/my-posts` - Get user's posts
- `PUT /api/community/posts/{id}` - Update post
- `DELETE /api/community/posts/{id}` - Delete post
- `POST /api/community/posts/{id}/like` - Like/unlike post

### Comments
- `POST /api/community/comments` - Add comment
- `GET /api/community/comments/post/{postId}` - Get comments for post
- `PUT /api/community/comments/{id}` - Update comment
- `DELETE /api/community/comments/{id}` - Delete comment
- `POST /api/community/comments/{id}/like` - Like/unlike comment
- `GET /api/community/comments/my-comments` - Get user's comments

### Chat
- `POST /api/chat/room/{userId}` - Get or create chat room
- `POST /api/chat/send` - Send message
- `GET /api/chat/rooms` - Get user's chat rooms
- `GET /api/chat/messages/{userId}` - Get chat messages
- `POST /api/chat/mark-read/{userId}` - Mark messages as read
- `GET /api/chat/unread-count` - Get unread message count

### User Management
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update profile
- `PATCH /api/users/progress` - Update progress
- `PATCH /api/users/domain` - Update current domain
- `GET /api/users/stats` - Get user statistics
- `GET /api/users/dashboard` - Get user dashboard

### Domains
- `GET /api/domains` - Get all domains
- `GET /api/domains/paginated` - Get domains with pagination
- `GET /api/domains/search` - Search domains
- `GET /api/domains/top` - Get top domains
- `GET /api/domains/{domainName}` - Get domain details
- `GET /api/domains/{domainId}/stats` - Get domain statistics
- `POST /api/domains` - Create domain (Admin)
- `PUT /api/domains/{id}` - Update domain (Admin)
- `DELETE /api/domains/{id}` - Delete domain (Admin)

### Admin
- `GET /api/admin/dashboard/stats` - Get admin statistics
- `GET /api/admin/system/health` - System health check

## Features in Detail

### 1. Authentication & Authorization
SmartPaths uses JWT (JSON Web Tokens) for secure authentication. Users can register as regular users or admins (with a special secret key). The system supports role-based access control with USER and ADMIN roles.

**Key Features:**
- Secure token-based authentication
- Password encryption
- Role-based permissions
- Token expiration handling

### 2. Career Assessment Quiz
The quiz system helps users discover their career interests through a series of targeted questions. Based on answers, users receive career domain recommendations and personalized learning suggestions.

**Key Features:**
- Dynamic question loading
- Result analysis and domain mapping
- Quiz history tracking
- Admin question management

### 3. Learning Roadmaps
Roadmaps provide structured learning paths for different career domains. Each roadmap contains multiple subtopics with detailed information and progress tracking.

**Key Features:**
- Domain-specific roadmaps
- Progress percentage tracking
- Subtopic organization
- User progress persistence

### 4. Resource Library
A comprehensive collection of learning resources including courses, articles, videos, and tutorials. Resources are categorized by domain and can be rated by users.

**Key Features:**
- Resource categorization
- Search and filtering
- User rating system
- Free/paid resource distinction
- Pagination for large datasets

### 5. Community Forum
Users can engage with each other through posts and comments, creating a supportive learning community.

**Key Features:**
- Post creation and management
- Nested comments system
- Like/vote system
- Post categorization
- Search functionality
- User content ownership

### 6. Private Messaging
Real-time chat functionality allows users to communicate privately with each other.

**Key Features:**
- Chat room creation
- Message history
- Read/unread status
- Unread count notifications

### 7. User Progress Tracking
Comprehensive progress tracking system that monitors user advancement through different learning components.

**Key Features:**
- Overall progress percentage
- Domain-specific progress
- Achievement system
- Dashboard with recommendations

### 8. Admin Management System
Complete administrative tools for content and user management.

**Key Features:**
- User statistics dashboard
- CRUD operations for all entities
- System health monitoring
- Content moderation capabilities

## Database Schema

The application uses the following main entities:

- **User**: User accounts with roles and progress tracking
- **Domain**: Career domains/categories
- **QuizQuestion**: Quiz questions with options and domain mapping
- **QuizResult**: User quiz submissions and results
- **Roadmap**: Learning paths with subtopics
- **RoadmapProgress**: User progress on roadmaps
- **Resource**: Learning resources with ratings
- **Post**: Community forum posts
- **Comment**: Comments on posts
- **ChatRoom**: Private chat rooms
- **ChatMessage**: Individual chat messages

## Security

- **JWT Authentication**: Stateless authentication using JSON Web Tokens
- **Password Encryption**: BCrypt password hashing
- **Role-based Access Control**: Method-level security with @PreAuthorize
- **Input Validation**: Comprehensive validation using Bean Validation
- **CORS Configuration**: Configured for cross-origin requests
- **SQL Injection Prevention**: Parameterized queries via JPA

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Note**: This application is designed for educational and career guidance purposes. Always consult with career professionals for personalized advice.