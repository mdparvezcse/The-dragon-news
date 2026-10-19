import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <h3 className="font-bold">Login With</h3>
      <div className="flex flex-col gap-3 mt-3">
        <button className="justify-start btn btn-outlier hover:bg-secondary text-accent hover:text-base-100"><FaGoogle></FaGoogle> Google</button>
        <button className="justify-start btn btn-outlier hover:bg-primary text-accent hover:text-base-100"> <FaGithub></FaGithub> GitHub</button>
      </div>
    </div>
  );
};

export default SocialLogin;
