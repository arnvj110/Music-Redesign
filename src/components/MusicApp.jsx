import React, { useEffect, useState } from 'react';
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume2, 
  Heart, 
  MoreHorizontal,
  Home,
  Search,
  Library,
  PlusCircle,
  Download,
  User,
  Settings,
  Shuffle,
  Repeat,
  Music
} from 'lucide-react';
import Sidebar from './Sidebar';
import PlayerBar from './PlayerBar';
import Header from './Header';
import HeroSection from './HeroSection';


const MusicApp = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [likedTracks, setLikedTracks] = useState(new Set([0, 2]));
  const [volume, setVolume] = useState(75);
  const [progress, setProgress] = useState(45);
  const [categories, setCategories] = useState([]);
  
  
  

  const tracks = [
    {
      id: 1,
      title: 'Blinding Lights',
      artist: 'The Weeknd',
      album: 'After Hours',
      duration: '3:20',
      cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'Watermelon Sugar',
      artist: 'Harry Styles',
      album: 'Fine Line',
      duration: '2:54',
      cover: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'Good 4 U',
      artist: 'Olivia Rodrigo',
      album: 'SOUR',
      duration: '2:58',
      cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop'
    },
    {
      id: 4,
      title: 'Levitating',
      artist: 'Dua Lipa',
      album: 'Future Nostalgia',
      duration: '3:23',
      cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop'
    },
    {
      id: 5,
      title: 'Stay',
      artist: 'The Kid LAROI & Justin Bieber',
      album: 'Stay',
      duration: '2:21',
      cover: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300&h=300&fit=crop'
    }
  ];

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleLike = (trackIndex) => {
    const newLikedTracks = new Set(likedTracks);
    if (newLikedTracks.has(trackIndex)) {
      newLikedTracks.delete(trackIndex);
    } else {
      newLikedTracks.add(trackIndex);
    }
    setLikedTracks(newLikedTracks);
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white overflow-hidden flex-col ">
      <div className='flex'>

      <Sidebar />
      
      
      
      {/* Main Content */}
      <div className="flex-1 max-h-[86vh] flex flex-col overflow-auto tasks-scrollbar">
        {/* Header */}
        <Header />

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto tasks-scrollbar p-6 space-y-8">
          <HeroSection isPlaying={isPlaying} togglePlayPause={togglePlayPause} />

          {/* Quick Access */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Good Afternoon</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {
              
              [
                { name: 'Liked Songs', color: 'from-purple-500 to-pink-500', icon: Heart },
                { name: 'Recently Played', color: 'from-green-500 to-teal-500', icon: Music },
                { name: 'Made For You', color: 'from-blue-500 to-purple-500', icon: User },
                { name: 'Discover Weekly', color: 'from-orange-500 to-red-500', icon: Search },
                { name: 'Release Radar', color: 'from-yellow-500 to-orange-500', icon: PlusCircle },
                { name: 'Daily Mix 1', color: 'from-pink-500 to-purple-500', icon: Shuffle }
              ].map((item, index) => (
                <div key={index} className="group bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <p className="text-gray-400 text-sm">Playlist • SoundWave</p>
                    </div>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center hover:scale-105 transition-transform">
                        <Play className="w-5 h-5 ml-0.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Charts */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Charts</h2>
              <button className="text-gray-400 hover:text-white font-medium">Show all</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Top 50 - Global', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop', listeners: '15.2M' },
                { title: 'Top 50 - USA', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop', listeners: '8.7M' },
                { title: 'Viral 50 - Global', image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300&h=300&fit=crop', listeners: '5.1M' },
                { title: 'New Music Friday', image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop', listeners: '12.3M' }
              ].map((chart, index) => (
                <div key={index} className="group bg-white/5 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/10 transition-all cursor-pointer">
                  <div className="relative mb-4">
                    <img
                      src={chart.image}
                      alt={chart.title}
                      className="w-full aspect-square object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center">
                      <button className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center hover:scale-105 transition-transform">
                        <Play className="w-6 h-6 ml-1" />
                      </button>
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-1">{chart.title}</h3>
                  <p className="text-gray-400 text-sm">{chart.listeners} monthly listeners</p>
                </div>
              ))}
            </div>
          </section>

          {/* Made For You */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Made For You</h2>
              <button className="text-gray-400 hover:text-white font-medium">Show all</button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { title: 'Daily Mix 1', subtitle: 'The Weeknd, Dua Lipa, Harry Styles and more', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop' },
                { title: 'Daily Mix 2', subtitle: 'Olivia Rodrigo, Taylor Swift, Billie Eilish and more', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop' },
                { title: 'Discover Weekly', subtitle: 'Your weekly mixtape of fresh music', image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300&h=300&fit=crop' },
                { title: 'Release Radar', subtitle: 'Catch all the latest music from artists you follow', image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop' },
                { title: 'Your Time Capsule', subtitle: 'The songs that defined your past', image: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=300&h=300&fit=crop' }
              ].map((playlist, index) => (
                <div key={index} className="group bg-white/5 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/10 transition-all cursor-pointer">
                  <div className="relative mb-4">
                    <img
                      src={playlist.image}
                      alt={playlist.title}
                      className="w-full aspect-square object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center">
                      <button className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center hover:scale-105 transition-transform">
                        <Play className="w-5 h-5 ml-0.5" />
                      </button>
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">{playlist.title}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2">{playlist.subtitle}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Popular Artists */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Popular Artists</h2>
              <button className="text-gray-400 hover:text-white font-medium">Show all</button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { name: 'The Weeknd', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop', followers: '89.2M' },
                { name: 'Ariana Grande', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop', followers: '78.5M' },
                { name: 'Drake', image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300&h=300&fit=crop', followers: '85.1M' },
                { name: 'Taylor Swift', image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop', followers: '91.3M' },
                { name: 'Ed Sheeran', image: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=300&h=300&fit=crop', followers: '82.7M' },
                { name: 'Billie Eilish', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop', followers: '67.9M' }
              ].map((artist, index) => (
                <div key={index} className="group text-center">
                  <div className="relative mb-4">
                    <img
                      src={artist.image}
                      alt={artist.name}
                      className="w-full aspect-square object-cover rounded-full mx-auto shadow-lg"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-full flex items-center justify-center">
                      <button className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center hover:scale-105 transition-transform">
                        <Play className="w-5 h-5 ml-0.5" />
                      </button>
                    </div>
                  </div>
                  <h3 className="font-semibold mb-1">{artist.name}</h3>
                  <p className="text-gray-400 text-sm">{artist.followers} followers</p>
                </div>
              ))}
            </div>
          </section>

          {/* Browse by Genre */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Browse by Genre</h2>
              <button className="text-gray-400 hover:text-white font-medium">Show all</button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {
              
              [
                { name: 'Pop', color: 'from-pink-500 to-rose-500' },
                { name: 'Hip-Hop', color: 'from-orange-500 to-red-600' },
                { name: 'Rock', color: 'from-gray-700 to-gray-900' },
                { name: 'Electronic', color: 'from-cyan-400 to-blue-600' },
                { name: 'Jazz', color: 'from-yellow-500 to-orange-600' },
                { name: 'Classical', color: 'from-purple-600 to-indigo-800' },
                { name: 'R&B', color: 'from-green-500 to-emerald-600' },
                { name: 'Country', color: 'from-amber-500 to-orange-700' }
              ].map((genre, index) => (
                <div key={index} className={`relative h-32 rounded-2xl bg-gradient-to-br ${genre.color} overflow-hidden cursor-pointer group hover:scale-105 transition-transform`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="relative z-10 p-4 h-full flex items-end">
                    <h3 className="font-bold text-xl">{genre.name}</h3>
                  </div>
                  <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full transform rotate-12"></div>
                </div>
              ))}
            </div>
          </section>

          {/* Recently Played */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Recently Played</h2>
              <button className="text-gray-400 hover:text-white font-medium">Show all</button>
            </div>
            <div className="space-y-2">
              {tracks.map((track, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-4 p-3 rounded-lg hover:bg-white/5 transition-colors group cursor-pointer ${
                    currentTrack === index ? 'bg-white/10' : ''
                  }`}
                  onClick={() => setCurrentTrack(index)}
                >
                  <div className="w-8 text-gray-400 text-center">
                    {currentTrack === index && isPlaying ? (
                      <div className="flex items-center justify-center">
                        <div className="w-4 h-4 flex items-end space-x-0.5">
                          <div className="w-1 bg-green-500 animate-pulse" style={{height: '60%'}}></div>
                          <div className="w-1 bg-green-500 animate-pulse" style={{height: '100%', animationDelay: '0.1s'}}></div>
                          <div className="w-1 bg-green-500 animate-pulse" style={{height: '80%', animationDelay: '0.2s'}}></div>
                        </div>
                      </div>
                    ) : (
                      <span className="text-sm">{index + 1}</span>
                    )}
                  </div>
                  <div className="relative">
                    <img
                      src={track.cover}
                      alt={track.title}
                      className="w-12 h-12 object-cover rounded"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`font-medium truncate ${currentTrack === index ? 'text-green-400' : ''}`}>
                      {track.title}
                    </p>
                    <p className="text-gray-400 text-sm truncate">{track.artist}</p>
                  </div>
                  <p className="text-gray-400 text-sm hidden md:block">{track.album}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(index);
                    }}
                    className={`opacity-0 group-hover:opacity-100 transition-opacity ${
                      likedTracks.has(index) ? 'text-green-500 opacity-100' : 'hover:text-green-400'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${likedTracks.has(index) ? 'fill-current' : ''}`} />
                  </button>
                  <span className="text-gray-400 text-sm">{track.duration}</span>
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity hover:text-white">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
      </div>

      {/* Player Bar */}
      <PlayerBar progress={progress} volume={volume} currentTrack={currentTrack} likedTracks={likedTracks} tracks={tracks} toggleLike={toggleLike} togglePlayPause={togglePlayPause} isPlaying={isPlaying} />
    </div>
  );
};

export default MusicApp;