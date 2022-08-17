import React, { useEffect } from 'react'
import { getMovies } from '../config/api';

const HostImage = 'https://image.tmdb.org/t/p/w500'

function Row({ title, path, isLarge }: any) {
    const [movies, setMovies] = React.useState([]);

    const fetchMovies = async (_path: any) => {
        try {
            const data = await getMovies(_path)
            console.log('data', data.results)

            setMovies(data.results);
        } catch (error) {
            console.log('fetchMovies error ', error);
        }
    }
    useEffect(() => {
    fetchMovies(path)
      
    }, [path]);
    

  return (
    <>
        <header>
          <h2>{title}</h2>
        </header>
        <div className="mainContainer">

            <div className="moviesList">
            <main>
            <section>
            <div className={`${isLarge ? 'card-large' : 'card'}`}>
                {movies?.map((movie: any) => {
                    return (
                        <img 
                            key={movie.id} 
                            src={`${HostImage}${isLarge ? movie.backdrop_path : movie.poster_path}`} 
                            alt={movie.title} 
                        />
                    )
                })}
            </div>
            </section>
        </main>
            </div>
        </div >
    </>
  )
}

export default Row