import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

export default function FollowButton({ targetId, initialFollowing = false, onChange }) {
  const { user } = useAuth();
  const [isFollowing, setIsFollowing] = useState(initialFollowing);
  const [loading, setLoading] = useState(false);

  if (!user || user.id === targetId) return null;

  const toggleFollow = async () => {
    try {
      setLoading(true);
      if (isFollowing) {
        await axios.post(`/api/users/unfollow/${targetId}`);
        setIsFollowing(false);
        onChange && onChange(false);
      } else {
        await axios.post(`/api/users/follow/${targetId}`);
        setIsFollowing(true);
        onChange && onChange(true);
      }
    } catch (e) {
      // noop
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={toggleFollow}
      disabled={loading}
      className={`w-full ${isFollowing ? 'bg-gray-200 text-gray-800' : 'bg-purple-600 text-white'} py-2 rounded-lg hover:opacity-90 transition-colors`}
    >
      {loading ? '...' : isFollowing ? 'Following' : 'Follow'}
    </button>
  );
}


