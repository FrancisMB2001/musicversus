import type { ISpotifyToken, ISpotifyTrackDTO } from "../models/spotify";


const API_URL = import.meta.env.SPOTIFY_API_URL || 'http://localhost:8080';

export const getTrackIdsFromSpotifyPlaylist = async(id: string): Promise<string[]> => {
    const response = await fetch(`${API_URL}/spotify/playlists/${id}/tracks/ids`)
    const data = await response.json()
    console.log(data)
    const trackIds: string[] = Array.isArray(data) ? data : [];
    return trackIds;
}

export const getSpotifyTrack = async(id: string): Promise<ISpotifyTrackDTO> => {
    const response = await fetch(`${API_URL}/spotify/tracks/${id}`)
    const data = await response.json()
    console.log(data)
    const track: ISpotifyTrackDTO = {
        id: data.id,
        name: data.name,
        albumName: data.albumName,
        releaseDate: data.releaseDate,
        artistsNames: data.artistsNames ?? data.artists?.map((a: any) => a.name) ?? [],
        imageRef: data.imageRef,
        spotifyLink: data.spotifyLink,
        popularity: data.popularity,
        duration: data.duration,
    };
    return track;
}