// src/api/spotifyClient.js
import axios from 'axios';

const spotifyClient = axios.create({
  baseURL: 'https://api.spotify.com/v1',
});

spotifyClient.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${ACCESS_TOKEN}`;
  return config;
});

export default spotifyClient;
