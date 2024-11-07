import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';

const MovieCard = memo(({ id,title, description, posterURL, rating, onDelete }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Link to={`Moviedetails/${id}`}>
    <div className="movie-card">
      <img 
        src={posterURL || "https://images.placeholders.dev/?width=1280&height=720"}
        alt={title}
        className="movie-poster"
      />
      <div className="movie-info">
        <h3 className="movie-title">{title}</h3>
        <p 
          className={`movie-description ${isExpanded ? 'expanded' : ''}`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {description}
        </p>
        <div className="movie-rating">
          <span className="star">★</span>
          <span>{rating}/5</span>
        </div>
        <button 
          onClick={onDelete}
          className="delete-button"
        >
          Delete
        </button>
      </div>
    </div>
    </Link>
  );
});

export default MovieCard;