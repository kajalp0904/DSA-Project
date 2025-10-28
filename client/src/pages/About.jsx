import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16 mt-16 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-8 text-center">About FriendConnect</h1>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            FriendConnect is a revolutionary platform designed to help people discover meaningful friendships 
            based on shared interests, mutual connections, and common experiences. We believe that the best 
            friendships are formed when people have something in common, whether it's a hobby, a professional 
            interest, or a shared background.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">How It Works</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="text-3xl mr-4">1️⃣</div>
              <div>
                <h3 className="font-bold mb-2">Create Your Profile</h3>
                <p className="text-gray-700">Share your interests, location, education, and bio to help others discover you.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-3xl mr-4">2️⃣</div>
              <div>
                <h3 className="font-bold mb-2">Smart Recommendations</h3>
                <p className="text-gray-700">Our algorithm analyzes mutual friends, shared interests, and common experiences to suggest perfect matches.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-3xl mr-4">3️⃣</div>
              <div>
                <h3 className="font-bold mb-2">Connect & Build</h3>
                <p className="text-gray-700">Send friend requests, accept connections, and start building meaningful friendships.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Features</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Advanced recommendation algorithm based on mutual connections and interests</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Privacy-focused design with secure authentication</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Personalized feed to stay connected with your network</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Real-time friend requests and connection management</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Beautiful, modern interface optimized for all devices</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Join Us Today</h2>
          <p className="text-lg mb-4">
            Start your journey to finding meaningful connections today. It's free and easy to get started!
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;

