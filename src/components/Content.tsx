import { useEffect, useState } from "react";
import { api } from "../services/api";
import { MovieCard } from './MovieCard';

interface Movie {
  id: number;
}

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}
export function Content(props: Movie) {
  
  const [movies, setMovies] = useState<MovieProps[]>([]);
  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${props.id}`).then(response => {
      setMovies(response.data);
    });

    
  }, [props.id]);

  return (
    <div className="movies-list">
    {movies.map(movie => (
      <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
    ))}
  </div>
  )
}