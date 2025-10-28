const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../models/User');

// Get user by ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
      .populate('friends', 'name profilePic email')
      .select('-password');
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update user profile
router.put('/:id', auth, async (req, res) => {
  try {
    if (req.userId !== req.params.id) {
      return res.status(403).json({ message: 'Access denied' });
    }

    const updates = req.body;
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { $set: updates },
      { new: true, runValidators: true }
    ).select('-password');

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all users (for discover)
router.get('/', async (req, res) => {
  try {
    const users = await User.find()
      .select('name email profilePic location college interests bio friends followers following')
      .limit(50);
    
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Follow a user
router.post('/follow/:targetId', auth, async (req, res) => {
  try {
    const { targetId } = req.params;
    if (req.userId === targetId) return res.status(400).json({ message: 'Cannot follow yourself' });
    const me = await User.findById(req.userId);
    const target = await User.findById(targetId);
    if (!me || !target) return res.status(404).json({ message: 'User not found' });
    if (!me.following.includes(target._id)) me.following.push(target._id);
    if (!target.followers.includes(me._id)) target.followers.push(me._id);
    await me.save();
    await target.save();
    res.json({ message: 'Followed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Unfollow a user
router.post('/unfollow/:targetId', auth, async (req, res) => {
  try {
    const { targetId } = req.params;
    const me = await User.findById(req.userId);
    const target = await User.findById(targetId);
    if (!me || !target) return res.status(404).json({ message: 'User not found' });
    me.following = me.following.filter(id => id.toString() !== targetId);
    target.followers = target.followers.filter(id => id.toString() !== req.userId);
    await me.save();
    await target.save();
    res.json({ message: 'Unfollowed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// List followers
router.get('/:id/followers', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate('followers', 'name profilePic');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user.followers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// List following
router.get('/:id/following', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate('following', 'name profilePic');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user.following);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

