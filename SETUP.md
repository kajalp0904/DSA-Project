# Setup Instructions

## Quick Start Guide

### 1. Install Dependencies
Run this command to install all dependencies for both client and server:
```bash
npm run install-all
```

Or manually:
```bash
npm install
cd server && npm install
cd ../client && npm install
cd ..
```

### 2. Set Up MongoDB

**Option A: Local MongoDB**
```bash
# Start MongoDB service
mongod
```

**Option B: MongoDB Atlas (Cloud)**
1. Go to https://www.mongodb.com/atlas
2. Create a free cluster
3. Get your connection string
4. Update the `.env` file with your connection string

### 3. Configure Environment Variables

Create a `.env` file in the `server` directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/friendrecommend
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
```

### 4. Run the Application

Start both servers simultaneously:
```bash
npm run dev
```

This will start:
- Backend server on http://localhost:5000
- Frontend client on http://localhost:3000

### 5. Create Your Account

1. Open http://localhost:3000
2. Click "Login" button
3. Click "Don't have an account? Sign up"
4. Fill in the form and create your account

## Troubleshooting

### MongoDB Connection Issues
- Make sure MongoDB is running
- Check your connection string in `.env`
- For MongoDB Atlas, whitelist your IP address

### Port Already in Use
- Change the port in `server/.env` or `vite.config.js`
- Or stop the process using that port

### Module Not Found Errors
- Run `npm run install-all` again
- Delete `node_modules` and reinstall

## Development

### Run Servers Separately

**Backend only:**
```bash
cd server
npm run dev
```

**Frontend only:**
```bash
cd client
npm run dev
```

### Build for Production

**Frontend:**
```bash
cd client
npm run build
```

## Next Steps

1. Explore the Discover page to see friend recommendations
2. Update your profile with interests and location
3. Send friend requests to people you'd like to connect with
4. Accept pending requests in the Connections page

Enjoy making new friends! 🎉

