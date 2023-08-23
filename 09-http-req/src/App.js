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

  let content = <p>No movies found</p>;

  if (movies.length) {
    content = <MoviesList movies={movies} />;
  }
  if (fetchError) {
    content = <p>{fetchError}</p>;
  }
  if (isLoading) {
    content = <p>Is loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
