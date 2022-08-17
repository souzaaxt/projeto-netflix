import React, { useEffect } from 'react'
import categories, { getMovies } from '../../config/api';
import Loading from '../Loading/Loading';
import { BannerContainer } from './style'

function Banner() {
    interface MovieProps {
        name: string;
        title: string;
        original_name: string;
        backdrop_path: string;
        overview: any;
    }

    const [removeLoading, setRemoveLoading] = React.useState(false)

    const [movie, setMovie] = React.useState<MovieProps>();
    const fetchRandomMovie = async () => {
        try {
            const netflixOriginalsCategory = categories.find(category => category.name === 'originals')
            const data = await getMovies(netflixOriginalsCategory?.path);
            const movies = data?.results;
            const randomIndex = Math.floor(Math.random() * movies.length);

            setMovie(movies[randomIndex]);
        } catch (error) {
            console.log('Banner error: ', error);
        }
    }

    useEffect(() => {
    fetchRandomMovie();
    setRemoveLoading(true)
    }, []);
    function truncate(str: string, n: number) {
        return str?.length > n ? str.substring(0, n - 1) + "..." : str;
      }
    

  return (
    <BannerContainer>
        <header className="banner-content" style={{
            backgroundSize: 'cover',
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            }}
        >
            <div className="banner-content">
                <h1 className="banner-title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner-button-container">
                    <button className="banner-button">Assistir</button>
                    <button className="banner-button">Minha Lista</button>
                </div>
                <div className="banner-description">
                    {truncate(movie?.overview, 250)}
                </div>
            </div>
            {!removeLoading && <Loading />}
        </header>
    </BannerContainer>
  )
}

export default Banner;