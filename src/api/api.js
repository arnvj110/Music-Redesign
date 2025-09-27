// src/api/getTrack.js

import spotifyClient from "./SpotifyApi.js";



export const getTrack = async (trackId) => {
  const response = await spotifyClient.get(`/tracks/${trackId}`);
  return response.data;
};


export const search = async (query, type= 'track,artist,album,playlist', limit = 10) => {
  const res = await spotifyClient.get('/search', {
    params: { q: query, type, limit },
  });
  return res.data.tracks.items;
};


export const getAlbum = async (id) => {
  const res = await spotifyClient.get(`/albums/${id}`);
  return res.data;
};


export const getArtist = async (id) => {
  const res = await spotifyClient.get(`/artists/${id}`);
  return res.data;
};

