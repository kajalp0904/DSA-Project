# FriendConnect - Friend Recommendation Website

A complete, production-ready full-stack Friend Recommendation Website built with React (frontend) and Node.js + Express + MongoDB (backend).

## 🌟 Features

- **Smart Friend Recommendations** - AI-powered algorithm finds perfect matches based on mutual friends, shared interests, and common experiences
- **Secure Authentication** - JWT-based authentication with bcrypt password hashing
- **Real-time Connections** - Send and accept friend requests instantly
- **Personalized Profiles** - Customize your profile with interests, bio, location, and education
- **Beautiful UI** - Modern, responsive design with Tailwind CSS and Framer Motion animations
- **Multi-page Structure** - Home, Discover, Connections, Profile, About, and Contact pages

## 🛠️ Tech Stack

### Frontend
- React 18
- React Router DOM
- Tailwind CSS
- Framer Motion
- Axios
- Vite

### Backend
- Node.js
- Express
- MongoDB with Mongoose
- JWT Authentication
- bcryptjs
- CORS

## 📁 Project Structure

```
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── context/       # Context providers
│   │   └── App.jsx
│   └── package.json
│
├── server/                 # Node.js Backend
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   ├── middleware/        # Custom middleware
│   └── server.js
│
└── package.json           # Root package for running both servers
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd friend-recommendation-website
```

2. **Install dependencies**
```bash
npm run install-all
```

3. **Set up environment variables**

Create a `.env` file in the `server` directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/friendrecommend
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
```

4. **Start MongoDB**
```bash
# If using local MongoDB
mongod
```

5. **Run the application**
```bash
npm run dev
```

This will start both the backend server (port 5000) and the frontend client (port 3000).

## 📝 API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Users
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user profile
- `GET /api/users` - Get all users

### Friends
- `GET /api/friends/recommendations/:userId` - Get friend recommendations
- `POST /api/friends/request/:userId/:targetId` - Send friend request
- `POST /api/friends/accept/:userId/:targetId` - Accept friend request
- `GET /api/friends/all/:userId` - Get all friends
- `GET /api/friends/requests/:userId` - Get pending friend requests

### Posts
- `GET /api/posts` - Get all posts
- `POST /api/posts` - Create a new post
- `POST /api/posts/:postId/like` - Like/Unlike a post

## 🎯 Recommendation Algorithm

The system calculates friend recommendations using a scoring system:

```
score = (mutual_friends × 2) + (shared_interests × 3)
```

Additional points are added if users share the same college or location.

## 🎨 Features Breakdown

### Home Page
- Hero section with call-to-action
- Feature highlights (Smart Recommendations, Mutual Connections, Personalized Feed)
- Statistics section

### Discover Page
- Browse top 10 friend recommendations
- Filter by location, interests, and college
- See mutual friends and shared interests
- Send connect requests

### Connections Page
- View all current friends
- Manage pending friend requests
- Accept or decline requests

### Profile Page
- View and edit profile information
- Add/remove interests
- Update bio, location, and college

## 🔒 Security

- Passwords are hashed using bcrypt
- JWT tokens for secure authentication
- Protected API routes with authentication middleware
- CORS enabled for cross-origin requests

## 🚀 Deployment

### Backend
1. Deploy to Heroku, AWS, or any Node.js hosting
2. Update MongoDB connection string
3. Set environment variables

### Frontend
1. Build the production bundle:
```bash
cd client
npm run build
```
2. Deploy to Netlify, Vercel, or any static hosting

## 📞 Support

For issues or questions, please contact support@friendconnect.com

## 📄 License

This project is licensed under the MIT License.

---

Made with ❤️ by FriendConnect Team

