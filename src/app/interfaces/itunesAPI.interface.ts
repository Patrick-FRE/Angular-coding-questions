export interface itunesAPIResponse {
  resultCount: number
  results: Album[]
}

export interface Album {
  amgArtistId: number
  artistId: number
  artistName: string
  artistViewUrl: string
  artworkUrl60: string
  artworkUrl100: string
  collectionCensoredName: string
  collectionExplicitness: string
  collectionId: number
  collectionName: string
  collectionPrice: number
  collectionType: string
  collectionViewUrl: string
  contentAdvisoryRating: string
  copyright: string
  country: string
  currency: string
  primaryGenreName: string
  releaseDate: string
  trackCount: number
  wrapperType: string
}
