import React, { useState } from 'react'
import Navbar from './Navbar'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../features/user/thunk';

const MovieSearch = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch()
    const {user , loading} = useSelector(state => state.user)

    const handleChange = (e)=>{
        const newQuery = e.target.value.toLowerCase();
        setQuery(newQuery);
        dispatch(fetchUser(newQuery))
    }

  return (
    <>
      <Navbar/>
      <div className="container">
        <div className="row">
            <div className="col-md-4">
                <input type="text" 
                className='w-100 bg-transparent border my-4 px-3 py-2 rounded text-white'
                placeholder='Search movie by name'
                onChange={handleChange}
                value={query}/>
            </div>

        <div className="row gap-5">
          <h1 className="my-3">Movies</h1>
           {loading && <h3 className="text-white">Loading movies...</h3>}
           {user.length === 0  && (<h5 className="text-white">No movies found.</h5>)}
          {user.map((movie, idx) => (
            <div className="card px-0 mb-3" style={{ width: '18rem' }} key={idx}>
              <img
                src={movie.Poster}
                className="card-img-top"
                alt={movie.Title}
                style={{ height: '350px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
                <p className="card-text">Year: {movie.Year}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </>
  )
}

export default MovieSearch
