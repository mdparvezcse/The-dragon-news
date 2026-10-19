import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="mt-5">
      <h3 className="font-bold">Find Us On</h3>
      <div>
        <div className="join join-vertical w-full">
          <button className="btn justify-start  text-accent bg-base-100 join-item"><FaFacebook></FaFacebook> Facebook</button>
          <button className="btn justify-start  text-accent bg-base-100 join-item"><FaInstagram></FaInstagram> Instagram</button>
          <button className="btn justify-start  text-accent bg-base-100 join-item"><FaTwitter></FaTwitter> Twitter</button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
