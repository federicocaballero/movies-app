import { nowPlayingAction } from "@/core/actions/movies/now-playing.action"
import { popularMoviesAction } from "@/core/actions/movies/popular.action"
import { topRatedMoviesAction } from "@/core/actions/movies/top-rated.action"
import { upcomingMoviesAction } from "@/core/actions/movies/upcoming.action"
import { useQuery } from "@tanstack/react-query"

export const useMovies = () => {
    const nowPlayingQuery = useQuery({
        querykey: ['movies', 'now-playing'],
        queryFn: nowPlayingAction,
        staleTime: 1000 * 60 * 10 * 24
    })
    const popularQuery = useQuery({
        querykey: ['movies', 'popular'],
        queryFn: popularMoviesAction,
        staleTime: 1000 * 60 * 10 * 24
    })
    const upcomingQuery = useQuery({
        querykey: ['movies', 'upcoming'],
        queryFn: upcomingMoviesAction,
        staleTime: 1000 * 60 * 10 * 24
    })

    const topRatedQuery = useQuery({
        querykey: ['movies', 'top-rated'],
        queryFn: topRatedMoviesAction,
        staleTime: 1000 * 60 * 10 * 24
    })
    
    return { nowPlayingQuery, popularQuery, upcomingQuery, topRatedQuery };
}
