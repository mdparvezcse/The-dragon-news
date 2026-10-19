import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";
import Latest from "./Latest";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div>
      <div className="flex flex-col items-center mt-5">
        <img src={logo} alt="" className=" w-350px" />
        <p className="text-accent">Journalism Without Fear or Favour</p>
        <p>{format(new Date(), "EEEE, MMMM dd, yyyy")}</p>
        <section className="w-11/12 m-auto mt-5">
          <Latest></Latest>
        </section>
      </div>
      <div>
        <section>
          <nav className="w-11/12 m-auto my-3">
            <Navbar></Navbar>
          </nav>
        </section>
      </div>
    </div>
  );
};

export default Header;
