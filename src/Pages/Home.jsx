import React from "react";
import { Navigate } from "react-router";

const Home = () => {
  return <Navigate to="/allCategories/0" replace />;
};

export default Home;