import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../features/user/thunk";
import './movieList.css'

const MovieList = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <>
      <Navbar />
      <div className="container py-5">
        <h2 className="text-center text-warning mb-4">🎞️ Popular Movies</h2>
        <div className="row justify-content-center gap-4">
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

export default MovieList;
