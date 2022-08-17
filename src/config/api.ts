export const Key = '39219a0fdf369f277bc55ae8765e87b2';

export const posterImgUrl = 'https://image.tmdb.org/t/p/w500/';

const categories = [
{
    name: 'trending',
    title: 'Em alta',
    path: `movie/top_rated?api_key=${Key}&language=pt-BR&page=1`,
    isLarge: true
},
{
    name: 'originals',
    title: 'Originais Netflix',
    path: `movie/upcoming?api_key=${Key}&language=pt-BR&page=1`,
    isLarge: false
},
{
    name: 'popular',
    title: 'Populares na Netflix',
    path: `movie/popular?api_key=${Key}&language=pt-BR&page=1`,
    isLarge: false
},
{
    name: 'comedy',
    title: 'Comédia',
    path: `movie/popular?api_key=${Key}&language=en-US&page=1`,
    isLarge: false
},
{
    name: 'documentary',
    title: 'Documentários',
    path: `movie/upcoming?api_key=${Key}&language=pt-BR&page=1`,
    isLarge: false
},
];

export const getMovies = async (path: any) => {
    try {
        let url = `https://api.themoviedb.org/3/${path}`;
        const response = await fetch(url);

        return await response.json();
    } catch (error) {
        console.log('error getMovies: ', error)
    }
}

export default categories;