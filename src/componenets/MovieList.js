import React, { useState, useEffect, useCallback, useMemo } from 'react';
import MovieCard from './MovieCard';
import Filter from './Filter';

const MovieList = () => {
  // State management with useState
  const [movies, setMovies] = useState(() => {
    // Initialize with localStorage data if available
    const savedMovies = localStorage.getItem('movies');
    return savedMovies ? JSON.parse(savedMovies) : [
      {
        title: "Inception",
        description: "A thief who enters the dreams of others to steal secrets from their subconscious.",
        posterURL: "https://images.placeholders.dev/?width=1280&height=720",
        rating: 4.8
      }
    ];
  });

  const [filters, setFilters] = useState({ title: '', rating: '' });
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: ''
  });

  // Save movies to localStorage whenever they change using useEffect
  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies]);

  // Memoized filter function using useCallback
  const handleFilterChange = useCallback((type, value) => {
    setFilters(prev => ({ ...prev, [type]: value }));
  }, []);

  // Form handling with useCallback
  const handleAddMovie = useCallback((e) => {
    e.preventDefault();
    if (newMovie.title && newMovie.rating) {
      setMovies(prev => [...prev, { ...newMovie, id: Date.now() }]);
      setNewMovie({ title: '', description: '', posterURL: '', rating: '' });
    }
  }, [newMovie]);

  // Delete movie handler with useCallback
  const handleDeleteMovie = useCallback((movieId) => {
    setMovies(prev => prev.filter(movie => movie.id !== movieId));
  }, []);

  // Memoized filtered movies using useMemo
  const filteredMovies = useMemo(() => {
    return movies.filter(movie => {
      const matchesTitle = movie.title.toLowerCase().includes(filters.title.toLowerCase());
      const matchesRating = !filters.rating || movie.rating >= Number(filters.rating);
      return matchesTitle && matchesRating;
    });
  }, [movies, filters]);

  return (
    <div className="movie-list-container">
      <h1 className="main-title">Movie Collection</h1>
      
      <form onSubmit={handleAddMovie} className="add-movie-form">
        <h2 className="form-title">Add New Movie</h2>
        <div className="form-grid">
          <input
            type="text"
            placeholder="Title"
            value={newMovie.title}
            onChange={(e) => setNewMovie(prev => ({ ...prev, title: e.target.value }))}
            required
          />
          <input
            type="number"
            placeholder="Rating (0-5)"
            min="0"
            max="5"
            step="0.1"
            value={newMovie.rating}
            onChange={(e) => setNewMovie(prev => ({ ...prev, rating: e.target.value }))}
            required
          />
          <input
            type="text"
            placeholder="Poster URL"
            value={newMovie.posterURL}
            onChange={(e) => setNewMovie(prev => ({ ...prev, posterURL: e.target.value }))}
          />
          <textarea
            placeholder="Description"
            value={newMovie.description}
            onChange={(e) => setNewMovie(prev => ({ ...prev, description: e.target.value }))}
          />
        </div>
        <button type="submit" className="submit-button">
          Add Movie
        </button>
      </form>

      <Filter onFilterChange={handleFilterChange} />

      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard 
            key={movie.id} 
            {...movie} 
            onDelete={() => handleDeleteMovie(movie.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;