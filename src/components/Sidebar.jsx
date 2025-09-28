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
} from 'lucide-react';

const Sidebar = () => {
  const playlists = [
    'Recently Played',
    'Liked Songs',
    'My Playlist #1',
    'Chill Vibes',
    'Workout Mix'
  ];

  return (
    <div className="w-64 max-h-[86vh] bg-white/10 backdrop-blur-xl border-r border-white/20 flex flex-col text-white">
      {/* Logo */}
      <div className="p-6 border-b border-white/20">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <Music className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            DeltaTune
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2 flex-1 text-sm">
        <div className="space-y-1">
          <a
            href="#"
            className="flex items-center space-x-3 px-3 py-2 rounded-lg bg-purple-100 text-purple-700 font-semibold"
          >
            <Home className="w-5 h-5" />
            <span>Home</span>
          </a>

          <a
            href="#"
            className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-purple-200 transition-colors text-purple-100 hover:text-purple-900"
          >
            <Search className="w-5 h-5" />
            <span>Search</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-purple-200 transition-colors text-purple-100 hover:text-purple-900"
          >
            <Library className="w-5 h-5" />
            <span>Your Library</span>
          </a>
        </div>

        <div className="pt-4 space-y-1">
          <a
            href="#"
            className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-purple-200 transition-colors text-purple-100 hover:text-purple-900"
          >
            <PlusCircle className="w-5 h-5" />
            <span>Create Playlist</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-purple-200 transition-colors text-purple-100 hover:text-purple-900"
          >
            <Heart className="w-5 h-5" />
            <span>Liked Songs</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-purple-200 transition-colors text-purple-100 hover:text-purple-900"
          >
            <Download className="w-5 h-5" />
            <span>Downloaded</span>
          </a>
        </div>

        {/* Playlists */}
        <div className="pt-4 border-t border-white/20">
          <div className="space-y-1 max-h-28 overflow-auto tasks-scrollbar">
            {playlists.map((playlist, index) => (
              <a
                key={index}
                href="#"
                className="block px-3 py-2 rounded-lg hover:bg-purple-200 transition-colors text-purple-100 hover:text-purple-900 text-sm"
              >
                {playlist}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-white/20">
        <div className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-purple-200 transition-colors cursor-pointer text-purple-100 hover:text-purple-900">
          <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">John Doe</p>
          </div>
          <Settings className="w-4 h-4 text-purple-300" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
