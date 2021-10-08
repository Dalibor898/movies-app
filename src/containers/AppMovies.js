import { useEffect, useState } from "react";
import moviesService from "../services/MoviesService";

function AppMovies()
{
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await moviesService.getAll();
      
      setMovies(data);
    }

    fetchMovies();
  }, [])
  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default AppMovies;