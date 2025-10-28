# 📂 Database Location & Information

## 🗄️ Where Your Database is Stored

### **Physical Location:**
```
C:\data\db\
```

This is where MongoDB stores **all your database files**, including:
- Your `friendrecommend` database
- All user data
- All collections (users, posts, friends)
- All indexes and metadata

---

## 📊 Database Details

### **Connection Info:**
- **Host:** localhost
- **Port:** 27017
- **Database Name:** `friendrecommend`
- **Full URI:** `mongodb://localhost:27017/friendrecommend`

### **Storage Path:**
```
C:\data\db\
```

Inside this folder, MongoDB stores:
- **WiredTiger files** (.wt) - The actual database files
- **Journal files** - Transaction logs
- **Lock files** - Database locks
- **Metadata files** - Database structure

---

## 📁 Database Files Breakdown

### What's in C:\data\db\:

| File Type | Description |
|-----------|-------------|
| `.wt` files | Database collections and indexes (actual data) |
| `journal/` | Transaction logs |
| `mongod.lock` | MongoDB lock file |
| `WiredTiger*.wt` | Storage engine files |

### **Your Data is Stored In:**
```
collection-0-*.wt  → Your users data
collection-2-*.wt  → Your posts data
collection-4-*.wt  → Other collections
index-*.wt         → Database indexes for fast queries
```

---

## 🔍 How to View Your Database

### **Method 1: Using MongoDB Compass (GUI)**

1. **Download MongoDB Compass:**
   - Go to: https://www.mongodb.com/products/compass
   - Install MongoDB Compass

2. **Connect to Database:**
   - Open Compass
   - Connection String: `mongodb://localhost:27017`
   - Click "Connect"

3. **Browse Data:**
   - Click on `friendrecommend` database
   - See `users` collection
   - See `posts` collection
   - See all your data in a visual interface!

### **Method 2: Using MongoDB Shell (mongosh)**

1. **Open Terminal/PowerShell**

2. **Connect to MongoDB:**
   ```bash
   mongosh
   ```

3. **Switch to Your Database:**
   ```javascript
   use friendrecommend
   ```

4. **View All Collections:**
   ```javascript
   show collections
   ```
   Output: `users`, `posts`

5. **View All Users:**
   ```javascript
   db.users.find()
   ```

6. **Count Users:**
   ```javascript
   db.users.countDocuments()
   ```

7. **View Specific User:**
   ```javascript
   db.users.findOne({email: "komalgpatil0904@gmail.com"})
   ```

### **Method 3: Using VS Code Extension**

1. Install "MongoDB for VS Code" extension
2. Connect to: `mongodb://localhost:27017`
3. Browse collections in VS Code

---

## 📦 Your Current Database Contains:

### **Collections:**

1. **users** - All registered users
   - 10 sample users with animal avatars
   - Each user has: name, email, location, college, interests, friends

2. **posts** - User posts (ready for future use)
   - Not yet populated
   - Schema ready for posts

### **Sample Users in Database:**
1. Komal Patil (🐼 Panda)
2. Prachi Dhole (🦋 Butterfly)
3. Tejas Patil (🦁 Lion)
4. Suhani Goyal (🐱 Cat)
5. Akshat Jain (🐺 Wolf)
6. Yasha Kavale (🦊 Fox)
7. Kavya Patel (🦅 Eagle)
8. Alex Gordan (🐻 Bear)
9. James Wilson (🦈 Shark)
10. Sophia Kim (🐯 Tiger)

**Plus:** Any new users who register!

---

## 🛠️ How to Access Your Database

### **Quick Commands:**

```bash
# Start MongoDB (if not running)
mongod

# Connect to MongoDB
mongosh

# Use your database
use friendrecommend

# Count users
db.users.countDocuments()

# View all users
db.users.find().pretty()

# View users with animal avatars
db.users.find({}, {name: 1, email: 1, profilePic: 1})

# Find user by email
db.users.findOne({email: "komalgpatil0904@gmail.com"})

# Find users by location
db.users.find({location: "Mumbai, India"})

# Find users by interest
db.users.find({interests: "Music"})
```

---

## 📍 Database Configuration

### **Backend Connection:**
**File:** `server/server.js`

```javascript
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/friendrecommend';
mongoose.connect(MONGODB_URI)
```

### **Environment Variables:**
**File:** `server/.env`

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/friendrecommend
JWT_SECRET=friendconnect-super-secret-key-2024-production
```

---

## 💾 Database Backup

### **To Backup Your Database:**

```bash
# Export all data to JSON
mongoexport --db=friendrecommend --collection=users --out=users-backup.json

# Or backup entire database
mongodump --db=friendrecommend --out=backup/
```

### **To Restore:**

```bash
# Restore from JSON
mongoimport --db=friendrecommend --collection=users --file=users-backup.json

# Or restore entire database
mongorestore backup/friendrecommend/
```

---

## 🔐 Database Security

### **Current Setup:**
- ✅ Local database (not exposed to internet)
- ✅ Password hashing (bcrypt)
- ✅ JWT authentication
- ✅ Input validation

### **Production Tips:**
- Use MongoDB Atlas (cloud)
- Enable authentication
- Use connection string with credentials
- Enable SSL/TLS

---

## 📊 Database Size

Your database is currently small:
- **Location:** C:\data\db\
- **Size:** ~200 KB (very small!)
- **Users:** 10 users
- **Data:** User profiles, interests, avatars

---

## 🎯 Summary

**Database Location:** `C:\data\db\`

**Database Name:** `friendrecommend`

**Connection String:** `mongodb://localhost:27017/friendrecommend`

**Contains:**
- ✅ 10 sample users with animal avatars
- ✅ All user profiles and data
- ✅ Ready for new registrations
- ✅ Friend recommendation system data

**To View:** Use MongoDB Compass or `mongosh`

**Your database is secure and running locally!** 🎉

