import { useEffect, useState } from 'react';
import { Key, posterImgUrl } from '../../config/key';
import { Container } from './styles';

export function SectionMovies() {
  interface Props {
    login?: string;
}

interface ArrayProps {
    result: Props[]
}
    // POPULARES
  const [popular, setPopular]: any = useState<ArrayProps[]>([])

    // INFORMAÇÕES POPULARES
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=39219a0fdf369f277bc55ae8765e87b2&language=pt-BR&page=1`)
    .then((response) => {
      return response.json()
      
    })
    .then((result) => {
      setPopular(result.results)
    })
    .catch((Error) => console.error(Error))
}, [])

  // EM ALTA
  const [rated, setRated]: any = useState<ArrayProps[]>([])

    // INFORMAÇÕES EM ALTA
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=39219a0fdf369f277bc55ae8765e87b2&language=pt-BR&page=1`)
    .then((response) => {
      return response.json()
      
    })
    .then((result) => {
      console.log(result)
      setRated(result.results)
    })
    .catch((Error) => console.error(Error))
}, [])

  // CONTINUE ASSISTINDO
  const [now, setNow]: any = useState<ArrayProps[]>([])

    // INFORMAÇÕES CONTINUE ASSISTINDO
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=39219a0fdf369f277bc55ae8765e87b2&language=pt-BR&page=1`)
    .then((response) => {
      return response.json()
      
    })
    .then((result) => {
      console.log(result)
      setNow(result.results)
    })
    .catch((Error) => console.error(Error))
}, [])

  return (
    <Container>
      <header>
          <h2>Populares na Netflix</h2>
        </header>
      <div className="mainContainer">

      {popular.map((item: any) => {
        return (
        <div className="moviesList">
          <main key={item.id}>
        <section>
          <div className="card">
              <img src={`${posterImgUrl}${item.poster_path}`} alt="" />
          </div>
        </section>
      </main>
        </div>
)
})} 
    </div >

    <header>
          <h2>Em alta</h2>
        </header>
      <div className="mainContainer">

      {rated.map((item: any) => {
        return (
        <div className="moviesList">
          <main key={item.id}>
        <section>
          <div className="card">
              <img src={`${posterImgUrl}${item.poster_path}`} alt="" />
          </div>
        </section>
      </main>
        </div>
)
})} 
    </div>

    <header>
          <h2>Continue assistindo</h2>
        </header>
      <div className="mainContainer">

      {now.map((item: any) => {
        return (
        <div className="moviesList">
          <main key={item.id}>
        <section>
          <div className="card">
              <img src={`${posterImgUrl}${item.poster_path}`} alt="" />
          </div>
        </section>
      </main>
        </div>
)
})} 
    </div>
    </Container>
  );
}
