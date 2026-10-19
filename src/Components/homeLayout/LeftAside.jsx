import React, { Suspense } from "react";
import AllCategories from "../../Pages/AllCategories";

const LeftAside = () => {
  return (
    <div>
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <AllCategories></AllCategories>
      </Suspense>
    </div>
  );
};

export default LeftAside;
