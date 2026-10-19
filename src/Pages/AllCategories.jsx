import React, { use } from "react";
import { NavLink } from "react-router";
const categoryPromise = fetch("/categories.json").then((res) => res.json());

const AllCategories = () => {
  const categories = use(categoryPromise);
  console.log(categories);
  return (
    <div>
      <h3 className="font-bold mb-3">All categories ({categories.length})</h3>

      {/* <ul>
        {categories.map((category) => (
          <li>
            <NavLink key={category.id} className="text-accent btn bg-base-100 w-full border-none hover:bg-base-200">
              {category.name}
            </NavLink>
          </li>
        ))}
      </ul> */}
      <div>
        {
          categories.map((category) => (
            <NavLink to={`/allCategories/${category.id}`} key={category.id} className="text-accent btn bg-base-100 w-full border-none hover:bg-base-200 font-semibold">{category.name}</NavLink>
          ))
        }
      </div>
    </div>
  );
};

export default AllCategories;
