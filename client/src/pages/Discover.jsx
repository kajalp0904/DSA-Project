import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import { motion } from 'framer-motion';

const Discover = () => {
  const { user } = useAuth();
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    location: '',
    interest: '',
    college: ''
  });

  useEffect(() => {
    fetchRecommendations();
  }, [user]);

  const fetchRecommendations = async () => {
    if (!user) {
      setLoading(false);
      return;
    }
    try {
      const response = await axios.get(`/api/friends/recommendations/${user.id}`);
      setRecommendations(response.data);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }
    setLoading(false);
  };

  const handleConnect = async (userId) => {
    try {
      await axios.post(`/api/friends/request/${user.id}/${userId}`);
      alert('Friend request sent!');
    } catch (error) {
      alert('Error sending request');
    }
  };

  const filteredRecommendations = recommendations.filter(person => {
    return (
      (!filters.location || person.location?.toLowerCase().includes(filters.location.toLowerCase())) &&
      (!filters.interest || person.interests?.some(i => i.toLowerCase().includes(filters.interest.toLowerCase()))) &&
      (!filters.college || person.college?.toLowerCase().includes(filters.college.toLowerCase()))
    );
  });

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-16 mt-16 text-center">
        <p className="text-xl">Please log in to discover friends</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 mt-16 text-center">
        <p className="text-xl">Loading recommendations...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <h2 className="text-3xl font-bold mb-6">Discover Friends</h2>
      
      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Filter by location"
            value={filters.location}
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Filter by interest"
            value={filters.interest}
            onChange={(e) => setFilters({ ...filters, interest: e.target.value })}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Filter by college"
            value={filters.college}
            onChange={(e) => setFilters({ ...filters, college: e.target.value })}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Recommendations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecommendations.map((person, index) => (
          <motion.div
            key={person._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6"
          >
            <div className="text-center mb-4">
              <img
                src={person.profilePic || 'https://via.placeholder.com/150'}
                alt={person.name}
                className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
              />
              <h3 className="text-xl font-bold">{person.name}</h3>
            </div>

            <div className="space-y-2 mb-4">
              {person.location && (
                <div className="text-gray-600">📍 {person.location}</div>
              )}
              {person.college && (
                <div className="text-gray-600">🎓 {person.college}</div>
              )}
              {person.mutualFriendsCount > 0 && (
                <div className="text-blue-600 font-semibold">
                  👥 {person.mutualFriendsCount} mutual friends
                </div>
              )}
              {person.sharedInterestsCount > 0 && (
                <div className="text-purple-600 font-semibold">
                  ✨ {person.sharedInterestsCount} shared interests
                </div>
              )}
            </div>

            {person.interests && person.interests.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {person.interests.slice(0, 3).map((interest, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            )}

            <button
              onClick={() => handleConnect(person._id)}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Connect
            </button>
          </motion.div>
        ))}
      </div>

      {filteredRecommendations.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">No recommendations found</p>
        </div>
      )}
    </div>
  );
};

export default Discover;

