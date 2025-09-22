import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  CheckSquare, 
  DollarSign, 
  BarChart3,
  User, 
  Settings,
  LogOut
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Sidebar: React.FC = () => {
  const { signOut, user } = useAuth();

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Tasks', href: '/tasks', icon: CheckSquare },
    { name: 'Finance', href: '/finance', icon: DollarSign },
    { name: 'Analytics', href: '/analytics', icon: BarChart3 },
    { name: 'Profile', href: '/profile', icon: User },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  const handleSignOut = () => {
    signOut();
  };

  return (
    <div className="bg-gray-900 text-white w-64 min-h-screen flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-blue-400">TaskFlow Manager</h1>
        <p className="text-gray-400 text-sm mt-1">Welcome, {user?.user_metadata?.full_name || 'User'}</p>
      </div>
      
      <nav className="flex-1 px-4 pb-4">
        <ul className="space-y-2">
          {navigation.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`
                }
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-gray-700">
        <button
          onClick={handleSignOut}
          className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-300 rounded-lg hover:bg-gray-800 hover:text-white transition-colors duration-200"
        >
          <LogOut className="mr-3 h-5 w-5" />
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;