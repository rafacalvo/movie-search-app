import React, { useState } from 'react'
import MovieCard from './movieCard'

function SearchMovies() {
  //States - input, query, movies
  const [query, setQuery] = useState('')

  //Create the state for movies, and update that state appropriate
  const [movies, setMovies] = useState([])

  const searchMovies = async (e) => {
    e.preventDefault()

    const url = `https://api.themoviedb.org/3/search/movie?api_key=eefaf5913f51dee149c53df8c6823963&language=en-US&query=${query}&page=1&include_adult=false`

    try {
      const res = await fetch(url)
      const data = await res.json()
      setMovies(data.results)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <form className='m-6' onSubmit={searchMovies}>
        <label className='text-lg mr-3' htmlFor='query'>
          Movie Name:
        </label>
        <input
          className='px-5 py-2 bg-gray-200 md:rounded-l-md rounded-md my-2'
          type='text'
          name='query'
          placeholder='i.e. Gone With The Wind'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className='bg-red-700 px-5 py-2 text-white rounded-md sm:rounded-r-md my-3'
          type='submit'>
          Search
        </button>
      </form>
      <div className='grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 p-5 lg:p-8'>
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </>
  )
}

export default SearchMovies
