import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import { motion } from 'framer-motion';

const Profile = () => {
  const { user, setUser } = useAuth();
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [profileData, setProfileData] = useState({
    name: '',
    bio: '',
    location: '',
    college: '',
    interests: [],
    profilePic: ''
  });
  const [newInterest, setNewInterest] = useState('');

  useEffect(() => {
    if (user) {
      fetchUserProfile();
    }
  }, [user]);

  const fetchUserProfile = async () => {
    try {
      const response = await axios.get(`/api/users/${user.id}`);
      setProfileData({
        name: response.data.name,
        bio: response.data.bio || '',
        location: response.data.location || '',
        college: response.data.college || '',
        interests: response.data.interests || [],
        profilePic: response.data.profilePic || 'https://via.placeholder.com/150'
      });
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
    setLoading(false);
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`/api/users/${user.id}`, profileData);
      setProfileData(response.data);
      setEditMode(false);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Error updating profile');
    }
  };

  const addInterest = () => {
    if (newInterest && !profileData.interests.includes(newInterest)) {
      setProfileData({
        ...profileData,
        interests: [...profileData.interests, newInterest]
      });
      setNewInterest('');
    }
  };

  const removeInterest = (interest) => {
    setProfileData({
      ...profileData,
      interests: profileData.interests.filter(i => i !== interest)
    });
  };

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-16 mt-16 text-center">
        <p className="text-xl">Please log in to view your profile</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 mt-16 text-center">
        <p className="text-xl">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-16 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-lg p-8"
      >
        {!editMode ? (
          <div className="text-center">
            <img
              src={profileData.profilePic}
              alt={profileData.name}
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h2 className="text-3xl font-bold mb-2">{profileData.name}</h2>
            {profileData.bio && (
              <p className="text-gray-600 mb-4">{profileData.bio}</p>
            )}
            {profileData.location && (
              <p className="text-gray-600 mb-2">📍 {profileData.location}</p>
            )}
            {profileData.college && (
              <p className="text-gray-600 mb-4">🎓 {profileData.college}</p>
            )}
            
            {profileData.interests.length > 0 && (
              <div className="flex flex-wrap gap-2 justify-center mb-6">
                {profileData.interests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            )}

            {user && user.id === (user?.id) ? (
              <button
                onClick={() => setEditMode(true)}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Edit Profile
              </button>
            ) : null}
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                value={profileData.name}
                onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Bio</label>
              <textarea
                value={profileData.bio}
                onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Location</label>
              <input
                type="text"
                value={profileData.location}
                onChange={(e) => setProfileData({ ...profileData, location: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">College</label>
              <input
                type="text"
                value={profileData.college}
                onChange={(e) => setProfileData({ ...profileData, college: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Interests</label>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={newInterest}
                  onChange={(e) => setNewInterest(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addInterest()}
                  placeholder="Add interest"
                  className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={addInterest}
                  className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {profileData.interests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full flex items-center gap-2"
                  >
                    {interest}
                    <button
                      onClick={() => removeInterest(interest)}
                      className="text-red-600 hover:text-red-800"
                    >
                      ✕
                    </button>
                  </span>
                ))}
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={handleUpdate}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Save Changes
              </button>
              <button
                onClick={() => setEditMode(false)}
                className="bg-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-400 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Profile;

