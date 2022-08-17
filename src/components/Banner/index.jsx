import React, { useEffect } from 'react'
import categories, { getMovies } from '../../config/api';
import { BannerContainer } from './style'

function Banner() {
    const [movie, setMovie] = React.useState({});
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
    }, []);
    function truncate(str, n) {
        return str?.length > n ? str.substring(0, n - 1) + "..." : str;
      }
    

  return (
    <BannerContainer>
        <header className="banner-content" style={{
            backgroundSize: 'cover',
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            roundPosition: 'center-center',
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
            
        </header>
    </BannerContainer>
  )
}

export default Banner;