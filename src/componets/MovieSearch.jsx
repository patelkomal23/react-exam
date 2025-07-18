import React, { useState } from 'react';
import Navbar from './Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../features/user/thunk';
import './movieSearch.css'

const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const { user, loading } = useSelector(state => state.user);

  const handleChange = (e) => {
    const newQuery = e.target.value.toLowerCase();
    setQuery(newQuery);
    dispatch(fetchUser(newQuery));
  };

  return (
    <>
      <Navbar />
      <div className="container py-4">
        <h2 className="text-center text-warning mb-3">🔎 Search Movies</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control bg-dark text-white border-warning rounded px-3 py-2 mb-4"
              placeholder="Search movie by name..."
              onChange={handleChange}
              value={query}
            />
          </div>
        </div>

        <div className="row justify-content-center gap-4">
          {loading && <h4 className="text-white">Loading movies...</h4>}
          {!loading && user.length === 0 && (
            <h5 className="text-white text-center">No movies found.</h5>
          )}
          {user.map((movie, idx) => (
            <div
              className="card movie-card p-0 shadow"
              style={{ width: '18rem', background: "#121212", color: "white" }}
              key={idx}
            >
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
    </>
  );
};

export default MovieSearch;
