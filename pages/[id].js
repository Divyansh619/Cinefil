import SearchTab from "@/Components/SearchTab";
import SearchedCard from "@/Components/SearchedCard";
import Sidebar from "@/Components/Sidebar";
import SidebarContent from "@/Components/SidebarContent";
import People from "@/Components/People";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const SearchQuery = () => {
  const router = useRouter();
  const searchedMovie = router.asPath.split("").slice(14).join("");
  const [searchedData, setSearchedData] = useState([]);
  const [totalResults, setTotalResults] = useState({
    movies:"",
    people:""
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [personData, setPersonData] = useState([]);
  const [activeItem, setActiveItem] = useState("movies");

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo(0, 0);
  };
 
  const searchMovie = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjViMGFlOTQ2ZDI4NzFkNWM5YjI1NzE4YmU1NDJiMSIsInN1YiI6IjY0ZDgzZWZmZDEwMGI2MDBhZGExOGQ1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tohv_fRjj6jkyCBkY4CL_aGURgPHs8fbEuT2AuEcOXw",
      },
    };

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchedMovie}&include_adult=false&language=en-US&page=${currentPage}`,
        options
      );
      const data = await response.json();
      console.log(data);
      setSearchedData(data.results);
      setTotalResults({movies:data.total_results});
      setTotalPages(data.total_pages);
    } catch (err) {
      console.error(err);
    }
  };

  const searchedActor = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjViMGFlOTQ2ZDI4NzFkNWM5YjI1NzE4YmU1NDJiMSIsInN1YiI6IjY0ZDgzZWZmZDEwMGI2MDBhZGExOGQ1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tohv_fRjj6jkyCBkY4CL_aGURgPHs8fbEuT2AuEcOXw",
      },
    };

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/person?query=${searchedMovie}&include_adult=false&language=en-US&page=1`,
        options
      );
      const data = await response.json();
      console.log(data);
      setPersonData(data.results);
      setTotalResults({people:data.total_results});
    } catch (err) {
      console.error(err);
    }
  };
 
  const handleItemChange = (item) => {
    setActiveItem(item);
  };

   

  useEffect(() => {
    searchMovie();
    searchedActor();
  }, [searchedMovie, currentPage]);

  return (
    <div className="w-[95%] mx-auto">
      <SearchTab />
      <div className="flex my-4">
        {/* 35% width for Sidebar */}
        <div className="w-[25%]  ">
          <Sidebar
            totalResults={totalResults}
            activeItem={activeItem}
            handleItemChange={handleItemChange}
          />
        </div>

        {/* 65% width for SearchedCard */}
        <div className="w-[75%]  ">
          {activeItem === "movies" && (
            <SidebarContent searchedData={searchedData} />
          )}
          {activeItem === "people" && <People personData={personData} />}

          {/* #Pagination */}
          {searchedData.length > 19 ? (
            <div>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="bg-green-600 rounded-lg text-white px-5 py-2"
              >
                Prev
              </button>
              <span className="px-5 py-2 rounded-md mx-2 border border-green-600">
                {currentPage}
              </span>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="bg-green-600 rounded-lg text-white px-5 py-2"
              >
                Next
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SearchQuery;
