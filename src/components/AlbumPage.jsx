
import React, { useState, useEffect } from "react";
import {
    Play,
    Pause,
    Heart,
    MoreHorizontal,
    ArrowLeft,
    Share,
    Download,
    Music,
    Calendar,
    User,
    Sun,
    Moon
} from "lucide-react";
import { getAlbum } from "../api/api";
import { Link, useParams } from "react-router-dom";
import { useTheme } from "../ThemeContext";
import Tracks from "./Tracks";




export default function AlbumPage() {

    const { albumId } = useParams();
    
    const { theme, toggleTheme } = useTheme();
    const [album, setAlbum] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    
    const [isLiked, setIsLiked] = useState(false);


    useEffect(() => {
        async function fetchAlbum() {
            setLoading(true);
            try {
                const data = await getAlbum(albumId);


                setAlbum(data);
                
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        fetchAlbum();
    }, [albumId]);

    

    

    const getTotalDuration = () => {
        if (!album?.tracks?.items) return "0:00";
        const totalMs = album.tracks.items.reduce((sum, track) => sum + track.duration_ms, 0);
        const hours = Math.floor(totalMs / 3600000);
        const minutes = Math.floor((totalMs % 3600000) / 60000);
        const sec = Math.floor((totalMs % 60000) / 1000);
        return hours > 0 ? `${hours} hr ${minutes} min ${sec} sec` : `${minutes} min ${sec} sec`;
    };








    if (loading) {
        return (
            <div className={`${theme ? 'dark' : ''}`}>
                
                <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-purple-900 dark:to-violet-900 text-gray-900 dark:text-white tasks-scrollbar">
                    <div className="p-8">
                        <div className="max-w-6xl mx-auto">
                            <div className="animate-pulse">
                                <div className="flex items-center gap-6 mb-8">
                                    <div className="w-72 h-72 bg-gray-300 dark:bg-gray-700 rounded-2xl"></div>
                                    <div className="flex-1 space-y-4">
                                        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-16"></div>
                                        <div className="h-12 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
                                        <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
                                        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/3"></div>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    {[...Array(8)].map((_, i) => (
                                        <div key={i} className="h-16 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (!album) {
        return (
            <div className={`${theme ? 'dark' : ''} `}>
                <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-purple-900 dark:to-violet-900 text-gray-900 dark:text-white flex items-center justify-center ">
                    <div className="text-center">
                        <Music className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <h2 className="text-2xl font-bold mb-2">Album not found</h2>
                        <p className="text-gray-500 dark:text-gray-400">The album you're looking for doesn't exist.</p>
                        <Link to="/">
                            <button

                                className="inline-flex items-center space-x-2 mt-4 px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-colors"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                <span>Go Back</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={` `}>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-purple-900 dark:to-violet-900 text-gray-900 dark:text-white transition-colors duration-300">

                {/* Header */}
                <div className="sticky top-0 z-10 bg-white/80 dark:bg-black/20 backdrop-blur-xl border-b border-gray-200 dark:border-white/10">
                    <div className="max-w-6xl mx-auto px-8 py-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <Link to="/">
                                    <button

                                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                                    >
                                        <ArrowLeft className="w-5 h-5" />
                                    </button>
                                </Link>
                                <div className="flex items-center space-x-2">
                                    <Music className="w-6 h-6 text-purple-500" />
                                    <span className="font-bold text-lg">Album</span>
                                </div>
                            </div>
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                                title={theme ? 'Switch to light mode' : 'Switch to dark mode'}
                            >
                                {theme ? (
                                    <Sun className="w-5 h-5 text-gray-300" />
                                ) : (
                                    <Moon className="w-5 h-5 text-gray-600" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                     <div className="overflow-auto tasks-scrollbar max-h-[86vh]">           
                <div className="max-w-6xl mx-auto p-8">
                    
                    {/* Album Header */}
                    <div className="flex flex-col lg:flex-row gap-8 mb-12">
                        <div className="flex justify-center lg:justify-start">
                            <img
                                src={album.images[0]?.url}
                                alt={album.name}
                                className="w-72 h-72 object-cover rounded-2xl shadow-2xl"
                            />
                        </div>

                        <div className="flex-1 flex flex-col justify-end space-y-6">
                            <div>
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                                    Album
                                </p>
                                <h1 className="text-4xl lg:text-6xl font-bold mb-4 leading-tight">
                                    {album.name}
                                </h1>

                                <div className="flex flex-wrap items-center gap-2 text-gray-600 dark:text-gray-300 mb-4">
                                    <div className="flex items-center space-x-2">
                                        <User className="w-4 h-4" />
                                        <span className="font-medium">{album.artists.map(a => a.name).join(", ")}</span>
                                    </div>
                                    <span>•</span>
                                    <div className="flex items-center space-x-2">
                                        <Calendar className="w-4 h-4" />
                                        <span>{new Date(album.release_date).getFullYear()}</span>
                                    </div>
                                    <span>•</span>
                                    <span>{album.total_tracks} songs</span>
                                    <span>•</span>
                                    <span>{getTotalDuration()}</span>
                                </div>
                            </div>

                            <div className="flex items-center space-x-6">
                                <button
                                    onClick={() => setIsPlaying(!isPlaying)}
                                    className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center hover:scale-105 hover:bg-green-400 transition-all shadow-lg"
                                >
                                    {isPlaying ? (
                                        <Pause className="w-7 h-7 text-white" />
                                    ) : (
                                        <Play className="w-7 h-7 text-white ml-1" />
                                    )}
                                </button>

                                <button
                                    onClick={() => setIsLiked(!isLiked)}
                                    className={`p-3 rounded-full transition-colors ${isLiked
                                        ? 'text-green-500 hover:text-green-400'
                                        : 'text-gray-500 dark:text-gray-400 hover:text-green-500'
                                        }`}
                                >
                                    <Heart className={`w-8 h-8 ${isLiked ? 'fill-current' : ''}`} />
                                </button>

                                <button className="p-3 rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                                    <Download className="w-6 h-6" />
                                </button>

                                <button className="p-3 rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                                    <Share className="w-6 h-6" />
                                </button>

                                <button className="p-3 rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                                    <MoreHorizontal className="w-6 h-6" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Tracks Section */}
                    <Tracks album={album} />

                    {/* Album Info */}
                    <div className="mt-12 bg-white/70 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold mb-4">About this album</h3>
                        <div className="grid md:grid-cols-3 gap-6 text-sm">
                            <div>
                                <p className="font-medium text-gray-500 dark:text-gray-400 mb-1">Release Date</p>
                                <p>{new Date(album.release_date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}</p>
                            </div>
                            <div>
                                <p className="font-medium text-gray-500 dark:text-gray-400 mb-1">Total Tracks</p>
                                <p>{album.total_tracks}</p>
                            </div>
                            <div>
                                <p className="font-medium text-gray-500 dark:text-gray-400 mb-1">Duration</p>
                                <p>{getTotalDuration()}</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}
