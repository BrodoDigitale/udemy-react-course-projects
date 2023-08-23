import React, { useState } from "react";
import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);

  async function fetchMoviesHandler() {
    try {
      setIsLoading(true);
      const res = await fetch("https://swapi.dev/api/film");

      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      const data = await res.json();
      const formattedData = data.results.map((movie) => {
        return {
          id: movie.episode_id,
          title: movie.title,
          openingText: movie.opening_crawl,
          releaseDate: movie.release_date,
        };
      });

      setMovies(formattedData);
    } catch (error) {
      setFetchError(error.message);
    }
    setIsLoading(false);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !fetchError && <p>No movies found</p>}
        {isLoading && <p>Is loading...</p>}
        {!isLoading && fetchError && <p>{fetchError}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
