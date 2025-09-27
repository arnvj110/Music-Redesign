// components/HeroSection.jsx
import React from 'react';
import { Play, Pause, Heart, MoreHorizontal } from 'lucide-react';

const HeroSection = ({ isPlaying, togglePlayPause }) => (
  <section className="relative h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700">
    <div className="absolute inset-0 bg-black/20"></div>
    <div className="relative z-10 p-8 h-full flex items-end">
      <div className="flex items-end space-x-6">
        <img
          src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop"
          alt="Featured playlist"
          className="w-56 h-56 object-cover rounded-xl shadow-2xl"
        />
        <div className="pb-4">
          <p className="text-sm font-medium opacity-90 mb-2">PLAYLIST</p>
          <h1 className="text-5xl font-bold mb-4">Today's Top Hits</h1>
          <p className="text-lg opacity-90 mb-6 max-w-md">The most played songs right now. Cover: The Weeknd</p>
          <div className="flex items-center space-x-4">
            <button 
              onClick={togglePlayPause}
              className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-lg"
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
            </button>
            <button className="text-white/80 hover:text-white transition-colors">
              <Heart className="w-8 h-8" />
            </button>
            <button className="text-white/80 hover:text-white transition-colors">
              <MoreHorizontal className="w-8 h-8" />
            </button>
          </div>
          <div className="flex items-center space-x-2 mt-4 text-sm opacity-90">
            <span>SoundWave</span>
            <span>•</span>
            <span>1,234,567 likes</span>
            <span>•</span>
            <span>50 songs, 3 hr 12 min</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
