import categories from '../../config/api';
import Row from '../Row';
import { Container } from './styles';

export function SectionMovies() {
  return (
    <Container>
    <>
      {categories.map((category: any) => {
        return (
          <Row 
            key={category.name} 
            title={category.title} 
            path={category.path} 
            isLarge={category.isLarge}
          />
        )
      })}
    </>

 
    </Container>
  );
}
