const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../models/User');

// Get friend recommendations
router.get('/recommendations/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Get all users except current user
    const allUsers = await User.find({ _id: { $ne: req.params.userId } })
      .select('name profilePic location college interests friends bio');

    // Calculate friend scores
    const recommendations = allUsers.map(otherUser => {
      let score = 0;
      
      // Mutual friends
      const mutualFriends = user.friends.filter(friend => 
        otherUser.friends.includes(friend)
      ).length;
      score += mutualFriends * 2;

      // Shared interests
      const sharedInterests = user.interests.filter(interest =>
        otherUser.interests.includes(interest)
      ).length;
      score += sharedInterests * 3;

      // Same college
      if (user.college && otherUser.college && user.college === otherUser.college) {
        score += 1;
      }

      // Same location
      if (user.location && otherUser.location && user.location === otherUser.location) {
        score += 1;
      }

      return {
        user: otherUser,
        score,
        mutualFriends: mutualFriends,
        sharedInterests: sharedInterests
      };
    });

    // Sort by score and return top 10
    recommendations.sort((a, b) => b.score - a.score);
    const topRecommendations = recommendations.slice(0, 10).map(rec => ({
      ...rec.user.toObject(),
      recommendationScore: rec.score,
      mutualFriendsCount: rec.mutualFriends,
      sharedInterestsCount: rec.sharedInterests
    }));

    res.json(topRecommendations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Send friend request
router.post('/request/:userId/:targetId', auth, async (req, res) => {
  try {
    const { userId, targetId } = req.params;

    if (userId !== req.userId) {
      return res.status(403).json({ message: 'Access denied' });
    }

    const targetUser = await User.findById(targetId);
    if (!targetUser) {
      return res.status(404).json({ message: 'Target user not found' });
    }

    // Check if request already sent
    if (targetUser.friendRequests.includes(userId)) {
      return res.status(400).json({ message: 'Request already sent' });
    }

    // Check if already friends
    if (targetUser.friends.includes(userId)) {
      return res.status(400).json({ message: 'Already friends' });
    }

    targetUser.friendRequests.push(userId);
    await targetUser.save();

    const user = await User.findById(userId);
    user.sentRequests.push(targetId);
    await user.save();

    res.json({ message: 'Friend request sent successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Accept friend request
router.post('/accept/:userId/:targetId', auth, async (req, res) => {
  try {
    const { userId, targetId } = req.params;

    if (userId !== req.userId) {
      return res.status(403).json({ message: 'Access denied' });
    }

    const user = await User.findById(userId);
    const targetUser = await User.findById(targetId);

    if (!user || !targetUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Remove from friend requests
    user.friendRequests = user.friendRequests.filter(id => id.toString() !== targetId);
    
    // Add to friends
    if (!user.friends.includes(targetId)) {
      user.friends.push(targetId);
    }
    if (!targetUser.friends.includes(userId)) {
      targetUser.friends.push(userId);
    }

    // Remove from sent requests
    targetUser.sentRequests = targetUser.sentRequests.filter(id => id.toString() !== userId);

    await user.save();
    await targetUser.save();

    res.json({ message: 'Friend request accepted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all friends
router.get('/all/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId)
      .populate('friends', 'name profilePic email location college interests bio');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user.friends);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get pending requests
router.get('/requests/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId)
      .populate('friendRequests', 'name profilePic email location college interests bio');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user.friendRequests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

