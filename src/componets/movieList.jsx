import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../features/user/thunk";

const MovieList = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row gap-5">
          <h1 className="mt-5">Movies</h1>
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
    </>
  );
};

export default MovieList;
