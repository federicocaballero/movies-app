import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Movie } from '@/infrastructure/interfaces/movie.interface'
import MoviePoster from './MoviePoster'
interface Props {
    movies: Movie[],
    title?: string,
    className?: string
}
const MovieHorizontalList = ({ movies, title, className }: Props) => {
    return (
        <View className={` ${className}`}>
            {title && <Text className='text-2xl font-bold pt-4 ps-4 pb-4'>{title}</Text>}
            <FlatList
                horizontal
                data={movies}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (<MoviePoster id={item.id} poster={item.poster} smallPoster />)}
            />
        </View>

    )
}

export default MovieHorizontalList