// src/api/spotifyClient.js
import axios from 'axios';

const spotifyClient = axios.create({
  baseURL: 'https://api.spotify.com/v1',
});

const VITE_ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;

spotifyClient.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${VITE_ACCESS_TOKEN}`;
  return config;
});

export default spotifyClient;
