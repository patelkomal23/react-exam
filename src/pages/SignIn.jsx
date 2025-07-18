import React from "react";
import { Link, useNavigate } from "react-router";


const SignIn = () => {
    const navi = useNavigate()
    const handleSubmit = ()=>{
        navi("/list")
    }

  return (
    <>
      <div className="container">
        <div className="row vh-100 d-flex justify-content-between align-items-center">
          <div className="col-md-4 mx-auto">
            <form className="border p-3 rounded-3" onSubmit={handleSubmit}>
                <h3 className="text-center">Welcome Back</h3>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email : 
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password :
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100 mt-2">
                Sign-In
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
