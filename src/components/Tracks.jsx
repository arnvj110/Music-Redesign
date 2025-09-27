import { useState } from 'react';
import { Shuffle, Clock, Play, Heart, MoreHorizontal } from 'lucide-react';

const Tracks = ({ album, isPlaying = false }) => {
    const [currentTrack, setCurrentTrack] = useState(null);
    const [likedTracks, setLikedTracks] = useState(new Set());

    const formatDuration = (ms) => {
        const minutes = Math.floor(ms / 60000);
        const seconds = Math.floor((ms % 60000) / 1000);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    const toggleLike = (trackId) => {
        const updatedLikes = new Set(likedTracks);
        if (updatedLikes.has(trackId)) {
            updatedLikes.delete(trackId);
        } else {
            updatedLikes.add(trackId);
        }
        setLikedTracks(updatedLikes);
    };

    const handleTrackPlay = (trackId) => {
        setCurrentTrack(trackId);
        // Here you would typically trigger the actual play functionality
        
    };

    if (!album || !album.tracks?.items) {
        return (
            <div className="bg-white/70 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-6 shadow-xl">
                <div className="text-center text-gray-500 dark:text-gray-400">
                    No tracks available
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white/70 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 dark:border-white/10">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Tracks</h2>
                <button className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/50 dark:bg-white/10 text-gray-600 dark:text-gray-300 hover:bg-white/70 dark:hover:bg-white/20 transition-all duration-200 hover:scale-105">
                    <Shuffle className="w-4 h-4" />
                    <span className="text-sm font-medium">Shuffle</span>
                </button>
            </div>

            {/* Track List Header */}
            <div className="grid grid-cols-12 gap-4 px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider border-b border-gray-200 dark:border-white/10 mb-2">
                <div className="col-span-1 text-center">#</div>
                <div className="col-span-7 lg:col-span-5">Title</div>
                <div className="hidden lg:block lg:col-span-4">Album</div>
                <div className="col-span-4 lg:col-span-2 flex items-center justify-center">
                    <Clock className="w-4 h-4" />
                </div>
                <div className="col-span-1"></div>
            </div>

            {/* Track List */}
            <div className="space-y-1 ">
                {album.tracks.items.map((track, index) => (
                    <div
                        key={track.id}
                        className={`grid grid-cols-12 gap-4 px-4 py-3 rounded-xl hover:bg-white/60 dark:hover:bg-white/10 transition-all duration-200 group cursor-pointer border border-transparent hover:border-white/30 dark:hover:border-white/20 ${
                            currentTrack === track.id 
                                ? 'bg-white/80 dark:bg-white/15 border-purple-200 dark:border-purple-500/30' 
                                : ''
                        }`}
                        onClick={() => handleTrackPlay(track.id)}
                    >
                        {/* Track Number or Playing Animation */}
                        <div className="col-span-1 flex items-center justify-center text-gray-500 dark:text-gray-400">
                            {currentTrack === track.id && isPlaying ? (
                                <div className="flex items-center justify-center">
                                    <div className="w-4 h-4 flex items-end space-x-0.5">
                                        <div className="w-1 bg-green-500 animate-pulse rounded-full" style={{ height: '60%' }}></div>
                                        <div className="w-1 bg-green-500 animate-pulse rounded-full" style={{ height: '100%', animationDelay: '0.1s' }}></div>
                                        <div className="w-1 bg-green-500 animate-pulse rounded-full" style={{ height: '80%', animationDelay: '0.2s' }}></div>
                                        <div className="w-1 bg-green-500 animate-pulse rounded-full" style={{ height: '90%', animationDelay: '0.15s' }}></div>
                                    </div>
                                </div>
                            ) : (
                                <span className="text-sm group-hover:hidden font-medium">{track.track_number}</span>
                            )}
                            <button 
                                className="hidden group-hover:flex p-2 rounded-full bg-green-500 hover:bg-green-400 text-white hover:scale-110 transition-all duration-200 shadow-lg items-center justify-center"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleTrackPlay(track.id);
                                }}
                            >
                                <Play className="w-3 h-3 ml-0.5" />
                            </button>
                        </div>

                        {/* Title and Artists */}
                        <div className="col-span-6 lg:col-span-5 flex items-center min-w-0 ">
                            <div className="min-w-0 flex-1">
                                <p className={`font-semibold truncate text-left transition-colors ${
                                    currentTrack === track.id 
                                        ? 'text-green-600 dark:text-green-400' 
                                        : 'text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400'
                                }`}>
                                    {track.name}
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-400 truncate mt-0.5">
                                    {album.artists?.map((a) => a.name).join(', ') || 'Unknown Artist'}
                                </p>
                            </div>
                        </div>

                        {/* Album Name */}
                        <div className="hidden lg:flex lg:col-span-4 items-center text-sm text-gray-600 dark:text-gray-400 truncate">
                            <span className="truncate font-medium">{album.name}</span>
                        </div>

                        {/* Like, Duration, More Options */}
<div className="col-span-4 lg:col-span-2 flex items-center justify-end space-x-4 pr-2">
  <button
    onClick={(e) => {
      e.stopPropagation();
      toggleLike(track.id);
    }}
    className={`p-1 rounded-full transition-all duration-200 hover:scale-110 ${
      likedTracks.has(track.id)
        ? 'text-green-500 opacity-100 hover:text-green-400'
        : 'text-gray-400 opacity-0 group-hover:opacity-100 hover:text-green-500'
    }`}
  >
    <Heart
      className={`w-4 h-4 ${likedTracks.has(track.id) ? 'fill-current' : ''}`}
    />
  </button>

  <span className="text-sm text-gray-500 dark:text-gray-400 font-mono">
    {formatDuration(track.duration_ms)}
  </span>

  <button
    className="opacity-0 group-hover:opacity-100 p-1.5 rounded-full hover:bg-white/60 dark:hover:bg-white/20 transition-all duration-200 hover:scale-110"
    onClick={(e) => {
      e.stopPropagation();
      
    }}
  >
    <MoreHorizontal className="w-4 h-4 text-gray-500 dark:text-gray-400" />
  </button>
</div>

                    </div>
                ))}
            </div>

            
        </div>
    );
};

export default Tracks;