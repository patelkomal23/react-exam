import React from "react";
import { Link, useNavigate } from "react-router";

const SignIn = () => {
  const navi = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navi("/list");
  };

  return (
    <div className="container">
      <div className="row vh-100 justify-content-center align-items-center">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-lg p-4 rounded-4">
            <h3 className="text-center mb-3 fw-bold">Welcome Back 👋</h3>
            <p className="text-center text-muted mb-4">
              Please enter your credentials to sign in.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label fw-semibold">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-100 mt-3">
                Sign In
              </button>

              <div className="text-center mt-3">
                <small>
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-decoration-none">
                    Sign up
                  </Link>
                </small>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
