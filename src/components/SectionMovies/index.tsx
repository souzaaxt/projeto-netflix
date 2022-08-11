import { useEffect, useState } from 'react';
import { Key, posterImgUrl } from '../../config/key';
import { Container } from './styles';

export function SectionMovies() {
  interface Props {
    login?: string;
}

interface ArrayProps {
    result: Props[]
    // login?: string;
}

  const [variable, setVariables]: any = useState<ArrayProps[]>([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=39219a0fdf369f277bc55ae8765e87b2&language=pt-BR&page=1`)
    .then((response) => {
      return response.json()
      
    })
    .then((result) => {
      // console.log(result)
      setVariables(result.results)
    })
    .catch((Error) => console.error(Error))
}, [])

  return (
    <Container>
      <header>
          <h2>Populares na Netflix</h2>
        </header>
      <div className="mainContainer">

      {variable.map((item: any) => {
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
