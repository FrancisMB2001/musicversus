import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { getSpotifyTrack, getTrackIdsFromSpotifyPlaylist } from './data/spotify.ts';

// console.log(await getTrackIdsFromSpotifyPlaylist("2oeM0WYw1w2pfUUysBIVm0"));
console.log(await getSpotifyTrack("3khEEPRyBeOUabbmOPJzAG"));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
