import React from 'react'
import { useParams } from 'react-router-dom'

const MovieDetails = ({ movie}) => {
  const {id}=useParams()
  const findMovie= movie.find((el)=>el.id === +id)
  return (
    <div className="newmovie-card">
      <img 
        src={findMovie.posterURL}
        alt={findMovie.title}
        className="movie-poster"
      />
      <div className="movie-info">
        <h3 className="movie-title">{findMovie.title}</h3>
        <p 
          className={`movie-description`}
         
        >
          {findMovie.description}
        </p>
        <div className="movie-rating">
          <span className="star">★</span>
          <span>{findMovie.rating}/5</span>
        </div>
       
      </div>
      <div>
      <iframe width="560" height="315" src={findMovie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
  )
}

export default MovieDetails
