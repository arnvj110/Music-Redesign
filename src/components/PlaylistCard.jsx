import React from 'react';

const PlaylistCard = ({ playlist }) => {
  const image = playlist.images?.[0]?.url;

  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 max-w-xs mx-auto sm:max-w-sm md:max-w-md">
      <div className="relative w-full h-48 overflow-hidden rounded-t-xl border-b border-gray-700">
        {image ? (
          <img
            src={image}
            alt={playlist.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gray-700 flex items-center justify-center text-gray-400">
            No Image
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col justify-between h-48">
        <h3
          className="text-xl font-semibold text-white truncate"
          title={playlist.name}
        >
          {playlist.name}
        </h3>
        <p
          className="text-gray-400 text-sm mt-2 line-clamp-3"
          title={playlist.description || 'No description'}
        >
          {playlist.description || 'No description'}
        </p>
        <a
          href={playlist.external_urls.spotify}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-full shadow-md transition-colors duration-300"
          aria-label={`Open ${playlist.name} on Spotify`}
        >
          Open on Spotify
        </a>
      </div>
    </div>
  );
};

export default PlaylistCard;
