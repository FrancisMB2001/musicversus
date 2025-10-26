export interface ISpotifyToken {
    access_token: string,
    token_type: string,
    expires_in: number
}

export interface ISpotifyTrackDTO {
    id: string;
    name: string;
    albumName: string;
    releaseDate: string; // ISO date string
    artistsNames: string[];
    imageRef: {
        height: number;
        url: string;
        width: number;
    };
    spotifyLink: string;
    popularity: number;
    duration: number; // duration in milliseconds
}