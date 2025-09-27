import React, { useState, useEffect } from 'react'
import { Heart, Shuffle, SkipBack, Play, Pause, SkipForward, Repeat, Volume2, VolumeX } from 'lucide-react'

const sampleTracks = [
  {
    id: 1,
    title: "Lost in the Echo",
    artist: "Linkin Park",
    cover: "https://i.scdn.co/image/ab67616d000048515fca8a6b8e37c7b2f578eaa0",
  },
  {
    id: 2,
    title: "Blinding Lights",
    artist: "The Weeknd",
    cover: "https://i.scdn.co/image/ab67616d00004851c83e705ce652d2a038ed5940",
  },
  {
    id: 3,
    title: "Circles",
    artist: "Post Malone",
    cover: "https://i.scdn.co/image/ab67616d000048516b6b5ae2904a9bb042f28937",
  }
]

const PlayerBar = () => {
  const [currentTrack, setCurrentTrack] = useState(0)
  const [likedTracks, setLikedTracks] = useState(new Set())
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0) // 0-100 percent
  const [volume, setVolume] = useState(50) // 0-100 percent
  const [isMuted, setIsMuted] = useState(false)

  const totalDurationSeconds = 3 * 60 + 20 // 3:20

  // Simulate progress increment every second while playing
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [isPlaying])

  // Format progress time to mm:ss
  const currentSeconds = (progress / 100) * totalDurationSeconds
  const minutes = Math.floor(currentSeconds / 60)
  const seconds = Math.floor(currentSeconds % 60)
  const formattedCurrentTime = `${minutes}:${seconds.toString().padStart(2, '0')}`

  const toggleLike = (trackIndex) => {
    setLikedTracks(prev => {
      const newSet = new Set(prev)
      if (newSet.has(trackIndex)) newSet.delete(trackIndex)
      else newSet.add(trackIndex)
      return newSet
    })
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  // Effective volume taking mute into account
  const effectiveVolume = isMuted ? 0 : volume

  return (
    <div className="h-24 bg-black/40 backdrop-blur-xl border-t border-white/10 flex items-center px-6 text-white">
      {/* Current Track Info */}
      <div className="flex items-center space-x-3 flex-1 min-w-0">
        <img
          src={sampleTracks[currentTrack].cover}
          alt="Current track"
          className="w-14 h-14 object-cover rounded"
        />
        <div className="min-w-0">
          <p className="font-medium truncate">{sampleTracks[currentTrack].title}</p>
          <p className="text-gray-400 text-sm truncate">{sampleTracks[currentTrack].artist}</p>
        </div>
        <button
          onClick={() => toggleLike(currentTrack)}
          className={`ml-2 ${likedTracks.has(currentTrack) ? 'text-green-500' : 'text-gray-400 hover:text-white'}`}
          aria-label="Like button"
        >
          <Heart className={`w-4 h-4 ${likedTracks.has(currentTrack) ? 'fill-current' : ''}`} />
        </button>
      </div>

      {/* Player Controls */}
      <div className="flex flex-col items-center flex-1 max-w-md min-w-[250px]">
        <div className="flex items-center space-x-4 mb-2">
          <button className="text-gray-400 hover:text-white transition-colors" aria-label="Shuffle">
            <Shuffle className="w-4 h-4" />
          </button>
          <button
            onClick={() => setCurrentTrack((currentTrack - 1 + sampleTracks.length) % sampleTracks.length)}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Previous"
          >
            <SkipBack className="w-5 h-5" />
          </button>
          <button
            onClick={togglePlayPause}
            className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:scale-105 transition-transform"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
          </button>
          <button
            onClick={() => setCurrentTrack((currentTrack + 1) % sampleTracks.length)}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Next"
          >
            <SkipForward className="w-5 h-5" />
          </button>
          <button className="text-gray-400 hover:text-white transition-colors" aria-label="Repeat">
            <Repeat className="w-4 h-4" />
          </button>
        </div>
        <div className="flex items-center space-x-2 w-full text-gray-400">
          <span className="text-xs">{formattedCurrentTime}</span>
          <div className="flex-1 h-1 bg-gray-600 rounded-full overflow-hidden">
            <div
              className="h-full bg-white rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="text-xs">3:20</span>
        </div>
      </div>

      {/* Volume Control */}
      <div className="flex items-center space-x-2 flex-1 justify-end min-w-[120px]">
        <button onClick={toggleMute} aria-label={isMuted ? "Unmute" : "Mute"}>
          {isMuted || volume === 0 ? (
            <VolumeX className="w-4 h-4 text-gray-400 hover:text-white transition-colors" />
          ) : (
            <Volume2 className="w-4 h-4 text-gray-400 hover:text-white transition-colors" />
          )}
        </button>
        <input
          type="range"
          min="0"
          max="100"
          value={effectiveVolume}
          onChange={(e) => {
            const val = Number(e.target.value)
            setVolume(val)
            if (val === 0) setIsMuted(true)
            else setIsMuted(false)
          }}
          className="w-24 cursor-pointer"
          aria-label="Volume"
        />
      </div>
    </div>
  )
}

export default PlayerBar
