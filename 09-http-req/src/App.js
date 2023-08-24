import React, { useState, useEffect, useCallback } from "react";
import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await fetch("https://swapi.dev/api/films");

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
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

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

  async function addMovieHandler(movie) {
    const res = await fetch('someDummyUrl', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    const loadedMovies = [];

    for(const key in data) {
      loadedMovies.push({
        id: key,
        title: data[key].title
      })
    }
    return loadedMovies;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
