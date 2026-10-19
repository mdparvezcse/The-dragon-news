import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const { user, logOut} = use(AuthContext);
  const handleLogOut = () =>{
    logOut()
    .then(() =>{
      alert("Log out successfully")
    })
    .catch(error=>{
      console.log(error.message);
    })
  }

  return (
    <div className="flex justify-between items-center">
      <div>{user && <p>{user.email}</p>}</div>
      <div className="flex gap-5 font-semibold text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex items-center gap-5">
        <img src={`${user? userIcon : userIcon}`} alt="" />
        {
          user? <button onClick={handleLogOut} className="btn btn-primary text-base-100 px-5 py-1">
            Log Out
          </button>
          : <Link to="/auth/login">
          <button className="btn btn-primary text-base-100 px-5 py-1">
            Login
          </button>
        </Link>
        }
        
      </div>
    </div>
  );
};

export default Navbar;
