import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '0cd8a3f60amsheb21e40066921cep12e0a4jsnb7e0aef3ea75');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/world' }),
    getArtistDetails: builder.query({ query: artistId => `/artists/details?artist_id=${artistId}` }),
    getSongDetails: builder.query({ query: songId => `/tracks/details?track_id=${songId}` }),
    getSongRelated: builder.query({ query: songId => `/tracks/related?track_id=${songId}` }),
    getSongsByCountry: builder.query({ query: countryCode => `/charts/country?country_code=${countryCode}` }),
    getSongsByGenre: builder.query({ query: genre => `/charts/genre-world?genre_code=${genre}` }),
    getSongsBySearch: builder.query({ query: searchTerm => `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetArtistDetailsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetSongsByCountryQuery,
  useGetSongsByGenreQuery,
  useGetSongsBySearchQuery,
} = shazamCoreApi;
