import React, { use } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
    const {logIn} = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
   

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        logIn(email, password)
        .then(result =>{
            navigate(`${location.state ? location.state: "/"}`)
        })
        .catch(error =>{
            console.log(error);
        })
         
    }
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="font-semibold text-2xl pt-3 text-center">
          Login Your Account
        </h2>
        <div className="card-body">
          <form onSubmit={handleLogin}>
            <fieldset className="fieldset">

              <label className="label">Email</label>
              <input type="email" name="email" className="input" placeholder="Email" />

              <label className="label">Password</label>
              <input type="password" name="password" className="input" placeholder="Password" />

              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
              <p className="pt-3">
                Don't have an account? Please{" "}
                <span className="text-secondary underline font-bold">
                  <Link to="/auth/register">Register</Link>
                </span>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
