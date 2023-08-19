import React from "react";

const Sidebar = ({ totalResults, activeItem, handleItemChange }) => {
  return (
    <div className="bg-gray-800 rounded-md text-white p-4">
      <div className="text-green-400 font-medium text-2xl">
        Search Results 
      </div>
      <div className="my-4">
        <div
          className={`cursor-pointer font-bold rounded-md p-2 ${
            activeItem === "movies" ? "bg-green-500 " : ""
          }`}
          onClick={() => handleItemChange("movies")}
        >
          Movies :  <span className="text-white"> {totalResults.movies > 0 ? totalResults.movies : 0}</span> 
        </div>
        <div
          className={`cursor-pointer font-bold rounded-md p-2 ${
            activeItem === "keyword" ? "bg-green-500" : ""
          }`}
          onClick={() => handleItemChange("keyword")}
        >
          Keyword
        </div>
        <div
          className={`cursor-pointer font-bold rounded-md p-2 ${
            activeItem === "people" ? "bg-green-500" : ""
          }`}
          onClick={() => handleItemChange("people")}
        >
          People : <span className="text-white"> {totalResults.people > 0 ? totalResults.people : 0}</span>
        </div>
        <div
          className={`cursor-pointer font-bold rounded-md p-2 ${
            activeItem === "collection" ? "bg-green-500" : ""
          }`}
          onClick={() => handleItemChange("collection")}
        >
          Collection
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
