import React from 'react'

function MovieCard({ movie }) {
  return (
    <div>
      <div
        className='bg-gray-200 flex flex-col justify-between items-center rounded-md p-5'
        key={movie.id}>
        <img
          className='rounded-sm'
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
          alt={movie.title + ' poster'}
        />
        <div className='p-5'>
          <h3 className='text-2xl font-semibold my-2'>{movie.title}</h3>
          <p>
            RELEASE DATE: <span>{movie.release_date}</span>
          </p>
          <p>
            RATING: <span>{movie.vote_average}</span>
          </p>
          <p className='text-lg'>{movie.overview}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
