import { motion } from 'framer-motion';
import Comments from '../components/Posts/Comments';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Discover Your Next Best Friend
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Connect with people who share your interests, passions, and experiences. 
          Build meaningful friendships based on genuine connections.
        </p>
        {!user && (
          <Link
            to="/discover"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Started Free
          </Link>
        )}
      </motion.div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="text-5xl mb-4">🎯</div>
          <h3 className="text-2xl font-bold mb-3">Smart Recommendations</h3>
          <p className="text-gray-600">
            Our advanced algorithm finds the perfect matches based on mutual friends, shared interests, and common experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="text-5xl mb-4">🤝</div>
          <h3 className="text-2xl font-bold mb-3">Mutual Connections</h3>
          <p className="text-gray-600">
            See who you already know in common and leverage existing relationships to build new friendships.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="text-5xl mb-4">📱</div>
          <h3 className="text-2xl font-bold mb-3">Personalized Feed</h3>
          <p className="text-gray-600">
            Stay connected with your friends' updates, activities, and shared moments all in one place.
          </p>
        </motion.div>
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-12 text-center"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-4xl font-bold mb-2">10K+</div>
            <div className="text-xl">Active Users</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">50K+</div>
            <div className="text-xl">Connections Made</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">95%</div>
            <div className="text-xl">Success Rate</div>
          </div>
        </div>
      </motion.div>

      {/* Quick Comments Demo (optional placeholder post) */}
      {/* This is optional wiring to ensure the Comments component is available.
          In a real app, you would render Comments inside a PostCard list. */}
    </div>
  );
};

export default Home;

