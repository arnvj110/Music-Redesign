// src/api/spotifyClient.js
import axios from 'axios';

const spotifyClient = axios.create({
  baseURL: 'https://api.spotify.com/v1',
});

const VITE_ACCESS_TOKEN = 'BQBwVCn-6aKrFF5skR4vtOTuZ1DSMvCVmIJYYfMHL_37tC-67vz-OgC9UfN-bdH1fDCx4cgT5C9eeGk4BkuLMh9ej1w6AC17sTG46KPetx788f5hwehEK-BgytwadxmGZcfFOYWaDR4';


spotifyClient.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${VITE_ACCESS_TOKEN}`;
  return config;
});

export default spotifyClient;
