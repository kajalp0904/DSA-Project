# 🎭 Test Accounts - Ready to Use!

## ✅ Sample Users Created!

10 sample users have been added to your database. You can now login and discover people!

---

## 🔐 How to Login

### Option 1: Use Your Own Account
1. Go to http://localhost:3000
2. Click **"Login"**
3. If you already registered, use your credentials

### Option 2: Use Sample Accounts

Here are 10 test accounts you can use. **Password for all: `password123`**

| Name | Email | Location | College | Interests |
|------|-------|----------|---------|-----------|
| John Smith | john@example.com | New York, USA | MIT | Coding, Music, Travel, Photography |
| Sarah Johnson | sarah@example.com | California, USA | Stanford | Art, Design, Music, Coffee |
| Mike Chen | mike@example.com | New York, USA | MIT | Business, Travel, Sports, Fitness |
| Emma Watson | emma@example.com | London, UK | Oxford | Reading, Writing, Coffee, Photography |
| David Lee | david@example.com | San Francisco, USA | Stanford | Coding, AI, Tech, Science |
| Lisa Anderson | lisa@example.com | California, USA | UCLA | Fitness, Yoga, Health, Travel |
| Robert Brown | robert@example.com | New York, USA | NYU | Photography, Art, Travel, Music |
| Maria Garcia | maria@example.com | Barcelona, Spain | Culinary Institute | Cooking, Food, Travel, Culture |
| James Wilson | james@example.com | Los Angeles, USA | Berklee | Music, Instruments, Concerts, Art |
| Sophia Kim | sophia@example.com | Seoul, South Korea | Seoul University | Gaming, Tech, Esports, Music |

---

## 🧪 Testing the Discover Feature

### Step 1: Login
1. Open http://localhost:3000
2. Click **"Login"**
3. Enter any email from the table above
4. Enter password: **`password123`**
5. Click **"Login"**

### Step 2: Check Your Profile
1. Click **"Profile"** in sidebar
2. Notice your profile has interests, location, and college already set!
3. This is why you'll see recommendations

### Step 3: Visit Discover Page
1. Click **"Discover"** in the sidebar (🔍 icon)
2. You'll see 9 friend recommendations!
3. Each card shows:
   - Profile photo
   - Name and location
   - College
   - Mutual connections count
   - Shared interests count
   - Interest tags
   - **"Connect"** button

### Step 4: Try Filters
At the top of Discover page:

**Filter by Location:**
- Type: "New York" → See John, Mike, Robert
- Type: "California" → See Sarah, Lisa
- Type: "USA" → See all US users

**Filter by Interest:**
- Type: "Music" → See John, Sarah, Mike, Robert, James, Sophia
- Type: "Coding" → See John, David
- Type: "Travel" → See John, Mike, Emma, Lisa, Robert, Maria
- Type: "Photography" → See John, Emma, Robert

**Filter by College:**
- Type: "MIT" → See John, Mike
- Type: "Stanford" → See Sarah, David
- Type: "NYU" → See Robert

### Step 5: Send Friend Requests
1. Click **"Connect"** on any person's card
2. A friend request is sent!
3. You can send multiple requests

### Step 6: Switch to Another Account
To test the full experience:

1. Click your name in the top-right
2. Click **"Logout"**
3. Login with a different account (e.g., sarah@example.com)
4. Go to **"Connections"** → **"Requests"** tab
5. You'll see pending friend requests!
6. Click **"Accept Request"** to become friends

---

## 🎯 Best Testing Scenarios

### Scenario 1: Testing Mutual Interests
1. Login as: **john@example.com** (interests: Coding, Music, Travel, Photography)
2. Go to Discover
3. See recommendations based on shared interests:
   - Robert (Photography, Travel, Music) - HIGH MATCH!
   - Sarah (Music) - medium match
   - Mike (Travel) - medium match

### Scenario 2: Testing Same College
1. Login as: **john@example.com** (from MIT)
2. Go to Discover
3. See **Mike Chen** (also from MIT)
4. Notice the college match boosts the recommendation!

### Scenario 3: Testing Location Match
1. Login as: **john@example.com** (New York)
2. Go to Discover
3. See **Mike Chen** and **Robert Brown** (also New York)
4. Location match adds bonus points!

### Scenario 4: Testing Filters
1. Login as any account
2. Go to Discover
3. Filter by Interest: "Music"
4. See only people with "Music" interest
5. Try multiple filters at once!

### Scenario 5: Testing Full Connection Flow
1. Login as: **john@example.com**
2. Send friend requests to 3 people
3. Logout
4. Login as: **sarah@example.com**
5. Login as: **mike@example.com**
6. Login as: **emma@example.com**
7. Each account will have pending friend requests
8. Accept them in "Connections" → "Requests" tab
9. Switch back to **john@example.com**
10. Go to "Connections" → "Friends" tab
11. See your 3 friends!

---

## 💡 What to Notice

### Recommendation Scoring
- More shared interests = Higher score
- More mutual friends = Higher score
- Same location = Bonus points
- Same college = Bonus points

### UI Features
- ✅ Beautiful profile cards with photos
- ✅ Filter functionality works smoothly
- ✅ Responsive design (try resizing browser)
- ✅ Clean animations (Framer Motion)
- ✅ Intuitive navigation

---

## 🐛 Troubleshooting

### "No recommendations showing"
**Solution:**
1. Make sure you're logged in
2. Make sure you completed your profile (it should be already completed for test accounts)

### "Can't send friend requests"
**Solution:**
1. Make sure you're not already friends
2. Try refreshing the page

### "Connections page is empty"
**Solution:**
1. You need to send friend requests first
2. Or accept friend requests from other accounts

---

## 🎊 You're Ready!

With 10 sample users, you can now:
- ✅ See friend recommendations
- ✅ Test all filters
- ✅ Send and accept friend requests
- ✅ Experience the full platform!

**Enjoy testing your Friend Recommendation Website!** 🚀

