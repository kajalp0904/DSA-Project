import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Sidebar = () => {
  const location = useLocation();
  const { user } = useAuth();
  const isActive = (path) => location.pathname === path;

  if (!user) return null;

  const menuItems = [
    { path: '/', icon: '🏠', label: 'Home' },
    { path: '/discover', icon: '🔍', label: 'Discover' },
    { path: '/connections', icon: '👥', label: 'Connections' },
    { path: '/profile', icon: '👤', label: 'Profile' },
  ];

  return (
    <aside className="fixed left-0 top-16 h-screen w-64 bg-white shadow-lg hidden lg:block z-40">
      <div className="p-4">
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                isActive(item.path)
                  ? 'bg-blue-100 text-blue-600 font-medium'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;

