import { View, Text, Dimensions, useWindowDimensions } from 'react-native'
import React, { useRef } from 'react'
import { Movie } from '@/infrastructure/interfaces/movie.interface'
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import MoviePoster from './MoviePoster';
interface Props {
    movies: Movie[]
}
const MainSlideShow = ({ movies }: Props) => {
    const width = useWindowDimensions().width;

    const ref = useRef<ICarouselInstance>(null);
    return (
        <View className='h-[250px] w-full'>
            <Carousel
                ref={ref}
                data={movies}
                renderItem={({ item }) => (
                    <MoviePoster id={item.id} poster={item.poster}  />
                )}
                loop
                width={200}
                height={350}
                style={{
                    width: width,
                    height: 350,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                defaultIndex={1}
            />

        </View>
    )
}

export default MainSlideShow