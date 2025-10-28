# 🚀 Quick Start Guide

## ✅ Installation Complete!

All dependencies have been installed successfully.

### What's Installed:
- ✅ Root package dependencies (concurrently)
- ✅ Server dependencies (Express, MongoDB, JWT, etc.)
- ✅ Client dependencies (React, Tailwind, Framer Motion, etc.)
- ✅ Environment variables configured

---

## 🗄️ Database Setup Required

Before running the application, you need to set up MongoDB:

### Option 1: Local MongoDB (Recommended for Development)

1. **Install MongoDB Community Edition**
   - Download from: https://www.mongodb.com/try/download/community
   - Run the installer
   - Follow installation wizard

2. **Start MongoDB Service**
   ```bash
   # On Windows (as Administrator)
   net start MongoDB
   
   # Or if installed as a service, it starts automatically
   ```

3. **Verify MongoDB is running**
   - MongoDB typically runs on `mongodb://localhost:27017`

### Option 2: MongoDB Atlas (Cloud - Free)

1. Go to https://www.mongodb.com/atlas/register
2. Create a free account and cluster
3. Get your connection string
4. Update `server/.env` with your Atlas connection string:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/friendrecommend
   ```

---

## 🎯 Ready to Run!

Once MongoDB is set up:

### Start the Application

```bash
npm run dev
```

This will start:
- ✅ Backend server on http://localhost:5000
- ✅ Frontend client on http://localhost:3000

### First Steps

1. **Open your browser**
   - Go to http://localhost:3000

2. **Create an account**
   - Click "Login" button
   - Click "Don't have an account? Sign up"
   - Fill in your details

3. **Update your profile**
   - Add interests, location, and college
   - Upload a profile picture

4. **Start exploring**
   - Visit "Discover" to see friend recommendations
   - Send friend requests
   - Check "Connections" for pending requests

---

## 📦 What's Included

### Backend (server/)
- Express REST API
- MongoDB with Mongoose
- JWT Authentication
- Friend recommendation algorithm
- Protected routes

### Frontend (client/)
- React 18 with routing
- Tailwind CSS styling
- Responsive design
- Framer Motion animations
- Multi-page structure

### Features
- 🔐 Secure authentication
- 🎯 Smart friend recommendations
- 👥 Friend requests system
- 📝 Profile management
- 📱 Responsive design
- ✨ Beautiful animations

---

## 🐛 Troubleshooting

### "MongoDB connection error"
- Make sure MongoDB is running
- Check `server/.env` file
- Verify MongoDB URI is correct

### "Port already in use"
- Change PORT in `server/.env` for backend
- Change port in `client/vite.config.js` for frontend

### "Module not found"
- Run `npm install` in the respective directory
- Delete `node_modules` and reinstall if needed

### "Authorization denied"
- Check if JWT_SECRET is set in `server/.env`
- Restart the server after adding environment variables

---

## 📞 Need Help?

Check these files for more information:
- `README.md` - Full project documentation
- `SETUP.md` - Detailed setup instructions
- `package.json` - Available scripts and dependencies

---

**Happy Friend Finding! 🎉**

