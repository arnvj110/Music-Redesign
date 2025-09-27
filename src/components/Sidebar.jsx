import React from 'react';
import {
  Home,
  Search,
  Library,
  PlusCircle,
  Heart,
  Download,
  User,
  Settings,
  Music,
  Sun,
  Moon,  
} from 'lucide-react';
import { useTheme } from '../ThemeContext';

const Sidebar = () => {
  const playlists = [
    'Recently Played',
    'Liked Songs',
    'My Playlist #1',
    'Chill Vibes',
    'Workout Mix'
  ];
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="w-64 max-h-[86vh] bg-white/80 dark:bg-black/20 backdrop-blur-xl border-r border-gray-200 dark:border-white/10 flex flex-col">
      {/* Logo & Theme Toggle */}
      <div className="p-6 border-b border-gray-200 dark:border-white/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Music className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              DeltaTune
            </span>
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-gray-300" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2 flex-1">
        <div className="space-y-1">
          <a
            href="#"
            className="flex items-center space-x-3 px-3 py-2 rounded-lg bg-purple-100 dark:bg-white/10 text-purple-700 dark:text-white"
          >
            <Home className="w-5 h-5" />
            <span className="font-medium">Home</span>
          </a>
          

          <a
          
            href="#"
            className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-colors text-gray-600 dark:text-gray-300"
          >
            <Search className="w-5 h-5" />
            <span>Search</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-colors text-gray-600 dark:text-gray-300"
          >
            <Library className="w-5 h-5" />
            <span>Your Library</span>
          </a>
        </div>

        <div className="pt-4 space-y-1">
          <a
            href="#"
            className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-colors text-gray-600 dark:text-gray-300"
          >
            <PlusCircle className="w-5 h-5" />
            <span>Create Playlist</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-colors text-gray-600 dark:text-gray-300"
          >
            <Heart className="w-5 h-5" />
            <span>Liked Songs</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-colors text-gray-600 dark:text-gray-300"
          >
            <Download className="w-5 h-5" />
            <span>Downloaded</span>
          </a>
        </div>

        {/* Playlists */}
        <div className="pt-4 border-t border-gray-200 dark:border-white/10">
          <div className="space-y-1 max-h-27 overflow-auto tasks-scrollbar">
            {playlists.map((playlist, index) => (
              <a
                key={index}
                href="#"
                className="block px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-colors text-gray-600 dark:text-gray-300 text-sm"
              >
                {playlist}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-200 dark:border-white/10">
        <div className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-colors cursor-pointer">
          <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">John Doe</p>
          </div>
          <Settings className="w-4 h-4 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
