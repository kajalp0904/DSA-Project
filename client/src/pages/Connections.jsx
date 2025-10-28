import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import { motion } from 'framer-motion';

const Connections = () => {
  const { user } = useAuth();
  const [friends, setFriends] = useState([]);
  const [pendingRequests, setPendingRequests] = useState([]);
  const [activeTab, setActiveTab] = useState('friends');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchFriends();
      fetchPendingRequests();
    }
  }, [user]);

  const fetchFriends = async () => {
    try {
      const response = await axios.get(`/api/friends/all/${user.id}`);
      setFriends(response.data);
    } catch (error) {
      console.error('Error fetching friends:', error);
    }
    setLoading(false);
  };

  const fetchPendingRequests = async () => {
    try {
      const response = await axios.get(`/api/friends/requests/${user.id}`);
      setPendingRequests(response.data);
    } catch (error) {
      console.error('Error fetching pending requests:', error);
    }
  };

  const handleAccept = async (targetId) => {
    try {
      await axios.post(`/api/friends/accept/${user.id}/${targetId}`);
      fetchFriends();
      fetchPendingRequests();
    } catch (error) {
      console.error('Error accepting request:', error);
    }
  };

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-16 mt-16 text-center">
        <p className="text-xl">Please log in to view connections</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <h2 className="text-3xl font-bold mb-6">Your Connections</h2>

      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab('friends')}
          className={`px-6 py-2 rounded-lg font-semibold ${
            activeTab === 'friends'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          Friends ({friends.length})
        </button>
        <button
          onClick={() => setActiveTab('requests')}
          className={`px-6 py-2 rounded-lg font-semibold ${
            activeTab === 'requests'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          Requests ({pendingRequests.length})
        </button>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <p className="text-xl">Loading...</p>
        </div>
      ) : activeTab === 'friends' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {friends.map((friend, index) => (
            <motion.div
              key={friend._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6"
            >
              <div className="text-center">
                <img
                  src={friend.profilePic || 'https://via.placeholder.com/150'}
                  alt={friend.name}
                  className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
                />
                <h3 className="text-lg font-bold">{friend.name}</h3>
                <p className="text-gray-600 text-sm">{friend.email}</p>
                {friend.location && (
                  <p className="text-gray-600 text-sm mt-1">📍 {friend.location}</p>
                )}
                {friend.interests && friend.interests.length > 0 && (
                  <div className="flex flex-wrap gap-1 justify-center mt-2">
                    {friend.interests.slice(0, 2).map((interest, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pendingRequests.map((request, index) => (
            <motion.div
              key={request._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6"
            >
              <div className="text-center">
                <img
                  src={request.profilePic || 'https://via.placeholder.com/150'}
                  alt={request.name}
                  className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
                />
                <h3 className="text-lg font-bold">{request.name}</h3>
                <p className="text-gray-600 text-sm">{request.email}</p>
                <button
                  onClick={() => handleAccept(request._id)}
                  className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Accept Request
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {activeTab === 'friends' && friends.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">No friends yet. Start connecting!</p>
        </div>
      )}

      {activeTab === 'requests' && pendingRequests.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">No pending requests</p>
        </div>
      )}
    </div>
  );
};

export default Connections;

