import { Album } from './Album';

export interface GetAlbumsByArtistName {
  resultCount: number;
  results: Album[];
}
