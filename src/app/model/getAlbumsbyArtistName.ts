import { Album } from './album';

export interface GetAlbumsByArtistName {
  resultCount: number;
  results: Album[];
}
