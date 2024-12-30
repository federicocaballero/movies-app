import { movieApi } from "@/core/api/movie-api";
import { MovieMapper } from "@/infrastructure/interfaces/mappers/movie.mapper";
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response";

export const nowPlayingAction = async () => {
    try {
        const { data } = await movieApi.get<MovieDBMoviesResponse>('/now_playing');
        const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);
        return movies;
    } catch (error) {
        console.log(error);
        throw 'Cannot get now playing movies';
    }
};