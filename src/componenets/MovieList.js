import React, { useState, useEffect, useCallback, useMemo } from 'react';
import MovieCard from './MovieCard';
import Filter from './Filter';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import MovieDetails from './MovieDetails';

const MovieList = () => {
  // State management with useState
  const [movies, setMovies] = useState([
    {
      "id": 1,
      "title": "Inception",
      "description": "A thief who enters the dreams of others to steal secrets from their subconscious.",
      "posterURL": "https://image.tmdb.org/t/p/original/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
      "rating": 4.8,
      "trailer": "https://www.youtube.com/watch?v=YoHD9XEInc0"
      },
      {
      "id": 2,
      "title": "The Matrix",
      "description": "A computer programmer discovers that reality as he knows it is a simulation created by machines.",
      "posterURL": "https://image.tmdb.org/t/p/original/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
      "rating": 4.7,
      "trailer": "https://www.youtube.com/watch?v=m8e-FF8MsqU"
      },
      {
      "id": 3,
      "title": "Memento",
      "description": "A man with short-term memory loss uses notes and tattoos to hunt for his wife's killer.",
      "posterURL": "https://image.tmdb.org/t/p/original/yuNs09hvpHVU1cBTCAk9zxsL2oW.jpg",
      "rating": 4.6,
      "trailer": "https://www.youtube.com/watch?v=4N6y6LEwsKc"
      },
      {
      "id": 4,
      "title": "Shutter Island",
      "description": "A U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.",
      "posterURL": "https://image.tmdb.org/t/p/original/kve20tXwUZpu4GUX8l6X7Z4jmL6.jpg",
      "rating": 4.5,
      "trailer": "https://www.youtube.com/watch?v=5iaYLCiq5RM"
      },
      {
      "id": 5,
      "title": "Interstellar",
      "description": "Explorers travel through a wormhole in space to ensure humanity's survival.",
      "posterURL": "https://image.tmdb.org/t/p/original/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      "rating": 4.8,
      "trailer": "https://www.youtube.com/watch?v=zSWdZVtXT7E"
      },
      {
      "id": 6,
      "title": "Source Code",
      "description": "A soldier wakes up in someone else's body and discovers he's part of a mission to find a bomber.",
      "posterURL": "https://m.media-amazon.com/images/I/61kv2iHPugL.SL1000.jpg",
      "rating": 4.3,
      "trailer": "https://www.youtube.com/watch?v=nSbzyEJ8X9E"
      },
      {
      "id": 7,
      "title": "Donnie Darko",
      "description": "A troubled teenager is plagued by visions of a man in a large rabbit suit who manipulates him to commit crimes.",
      "posterURL": "https://xl.movieposterdb.com/11_05/2001/246578/xl_246578_75de6643.jpg?v=2024-03-07%2016:14:39",
      "rating": 4.4,
      "trailer": "https://www.youtube.com/watch?v=ZZyBaFYFySk"
      },
      {
      "id": 8,
      "title": "Eternal Sunshine of the Spotless Mind",
      "description": "A couple undergoes a medical procedure to erase each other from their memories.",
      "posterURL": "https://image.tmdb.org/t/p/original/5MwkWH9tYHv3mV9OdYTMR5qreIz.jpg",
      "rating": 4.6,
      "trailer": "https://www.youtube.com/watch?v=1GiLxkLr9Aw"
      },
      {
      "id": 9,
      "title": "Coherence",
      "description": "Strange things begin to happen when a group of friends gather for dinner on the night of a comet.",
      "posterURL": "https://media-cache.cinematerial.com/p/500x/gvd4cfpt/coherence-movie-poster.jpg?v=1456457918",
      "rating": 4.2,
      "trailer": "https://www.youtube.com/watch?v=FUnSsUOQCCs"
      },
      {
      "id": 10,
      "title": "Primer",
      "description": "Two engineers accidentally discover a way to travel through time.",
      "posterURL": "https://media-cache.cinematerial.com/p/500x/fdvqyfqg/primer-movie-poster.jpg?v=1456196714",
      "rating": 4.1,
      "trailer": "https://www.youtube.com/watch?v=4CC60HJvZRE"
      },
      {
      "id": 11,
      "title": "The Prestige",
      "description": "Two rival magicians engage in a competitive battle for supremacy.",
      "posterURL": "https://media-cache.cinematerial.com/p/500x/ueu3pzjs/the-prestige-movie-poster.jpg?v=1456264974",
      "rating": 4.7,
      "trailer": "https://www.youtube.com/watch?v=o4gHCmTQDVI"
      },
      {
      "id": 12,
      "title": "Predestination",
      "description": "A temporal agent embarks on a complex series of time-travel journeys.",
      "posterURL": "https://media-cache.cinematerial.com/p/500x/i3vf64hc/predestination-movie-poster.jpg?v=1456346278",
      "rating": 4.4,
      "trailer": "https://www.youtube.com/watch?v=9ATUDncCy4I"
      },
      {
      "id": 13,
      "title": "Moon",
      "description": "An astronaut mining worker on the moon nears the end of his three-year solitary mission.",
      "posterURL": "https://cdn.cinematerial.com/p/297x/zl87e3sm/moon-movie-poster-md.jpg?v=1456321661",
      "rating": 4.3,
      "trailer": "https://www.youtube.com/watch?v=twuScTcDP_Q"
      },
      {
      "id": 14,
      "title": "Triangle",
      "description": "A group of friends aboard a yacht find themselves in a mysterious time loop.",
      "posterURL": "https://cdn.cinematerial.com/p/297x/njtnb7ul/triangle-british-movie-poster-md.jpg?v=1456008787",
      "rating": 4.2,
      "trailer": "https://www.youtube.com/watch?v=nLtMVlQB0Ks"
      },
      {
      "id": 15,
      "title": "Mr. Nobody",
      "description": "A boy stands on a station platform as a train is about to leave. Should he go with his mother or stay with his father?",
      "posterURL": "https://cdn.cinematerial.com/p/297x/yygh3sua/nobody-movie-poster-md.jpg?v=1620142028",
      "rating": 4.5,
      "trailer": "https://www.youtube.com/watch?v=8Ag5GgOrRNc"
      },
      {
      "id": 16,
      "title": "Edge of Tomorrow",
      "description": "A soldier fighting aliens gets to relive the same day repeatedly after each death.",
      "posterURL": "https://media-cache.cinematerial.com/p/500x/a775vj7w/edge-of-tomorrow-movie-poster.jpg?v=1456457899",
      "rating": 4.6,
      "trailer": "https://www.youtube.com/watch?v=yUmSVcttXnI"
      },
      {
      "id": 17,
      "title": "Arrival",
      "description": "A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear.",
      "posterURL": "https://image.tmdb.org/t/p/original/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg",
      "rating": 4.7,
      "trailer": "https://www.youtube.com/watch?v=tFMo3UJ4B4g"
      },
      {
      "id": 18,
      "title": "Looper",
      "description": "A hitman working for a crime syndicate realizes his targets are his future self.",
      "posterURL": "https://media-cache.cinematerial.com/p/500x/fggqtlsd/looper-movie-poster.jpg?v=1456648477",
      "rating": 4.4,
      "trailer": "https://www.youtube.com/watch?v=2iQuhsmtfHw"
      },
      {
      "id": 19,
      "title": "The Fountain",
      "description": "Three parallel stories about the quest for immortality across different time periods.",
      "posterURL": "https://media-cache.cinematerial.com/p/500x/ngjcrubk/the-fountain-movie-poster.jpg?v=1456247218",
      "rating": 4.2,
      "trailer": "https://www.youtube.com/watch?v=Zyh0GJa0dMI"
      }
  ].map((movie, index) => ({ ...movie, id: index + 1 })));

  const [filters, setFilters] = useState({ title: '', rating: '' });
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: ''
  });

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
    <Routes>
    
          
          
        <Route path="/" element={<div className="movie-list-container">
          <img className='img i1' src='cartoon-popcorn-icon-png1.webp'/>
          <img className='img i2'  src='cartoon-popcorn-icon-png1.webp'/>
          <img className='img i3' src='cartoon-popcorn-icon-png1.webp'/>
          <img className='img i4' src='cartoon-popcorn-icon-png1.webp'/>
    
          <h1 className="main-title">MovieFlex</h1>
          
          
          
            
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
          </div>}/>
        <Route path="/Moviedetails/:id" element={<MovieDetails movie={movies}/>}/>
    </Routes>
        
        
        
     
  );
};

export default MovieList;