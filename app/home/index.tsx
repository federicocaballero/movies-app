import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import React from 'react'
import { useMovies } from '@/presentation/hooks/useMoovies'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import MainSlideShow from '@/presentation/components/movies/MainSlideShow'
import MovieHorizontalList from '@/presentation/components/movies/MovieHorizontalList'

const HomeScreen = () => {
    const { nowPlayingQuery } = useMovies()
    const { popularQuery } = useMovies();
    const { upcomingQuery } = useMovies();
    const { topRatedQuery } = useMovies();
    const SafeArea = useSafeAreaInsets();

    if (nowPlayingQuery.isLoading) {
        return (
            <View>
                <ActivityIndicator color={"red"} size={40} />
            </View>
        )
    }
    return (
        <ScrollView>
            <View className='mt-2 pb-5' style={{ paddingTop: SafeArea.top }}>
                <Text className='text-3xl font-bold px-4 mb-2'>Movies App</Text>
                {/* Carousel de imagenes */}
                <MainSlideShow movies={nowPlayingQuery.data || []} />

                {/* Popular Movies */}
                <MovieHorizontalList movies={popularQuery.data || []} title='Popular Movies' className='mb-5' />

                {/* Top Rated */}
                <MovieHorizontalList movies={topRatedQuery.data || []} title='Mejor calificadas' className='mb-5' />

                {/* Upcoming */}
                <MovieHorizontalList movies={upcomingQuery.data || []} title='Proximamente...' className='mb-5' />
                {/* <Text>{JSON.stringify(nowPlayingQuery.data)}</Text> */}
            </View>
        </ScrollView>
    )
}

export default HomeScreen