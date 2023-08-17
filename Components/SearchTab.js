import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const SearchTab = () => {
  const [clickSearch, setClickSearch] = useState(false);
  const [trendingData, setTrendingData] = useState([]);
  const [searchValue, setSeacrhValue] = useState("");
  const router = useRouter();

  const trendingApi = async () => {
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
        "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
        options
      );
      const data = await response.json();
      console.log(data);
      setTrendingData(data.results);
    } catch (err) {
      console.error(err);
    }
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
        `https://api.themoviedb.org/3/search/movie?query=${searchValue}&include_adult=false&language=en-US&page=1`,
        options
      );
      const data = await response.json();
      console.log(data);
      //   setTrendingData(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    searchMovie();
    router.push(`/searchQuery?=${searchValue}`);
  };

  useEffect(() => {
    searchMovie();
    trendingApi();
  }, []);

  return (
    <div>
      {/* #Search_section */}
      <div className="relative my-auto z-50 cursor-pointer">
        <div className="flex">
          <div onClick={() => setClickSearch(!clickSearch)} className="my-auto">
            {clickSearch ? (
              <img src="/cancel.png" alt="Cancel" height={40} width={40} />
            ) : (
              <img src="/search.png" alt="Search" height={40} width={40} />
            )}
          </div>
          {clickSearch ? (
          <div class="relative m-3 w-full">
          <form onSubmit={(e) => submitHandler(e)}>
            <label for="Search" class="sr-only">Search</label>
        
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSeacrhValue(e.target.value)}
              id="Search"
              placeholder="Search movies"
              class="w-full rounded-md bg-gray-50 border-green-600 py-2.5 px-3 outline-none shadow-sm sm:text-sm focus:border-yellow-600 focus:ring focus:ring-yellow-600"
            />
        
            <span class="absolute inset-y-0 end-0 grid w-10 place-content-center">
              <button type="submit" class="text-gray-600 hover:text-gray-700">
                <span class="sr-only">Search</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            </span>
          </form>
        </div>
        
          ) : (
            ""
          )}
        </div>

        {clickSearch && (
          <>
            <div className="flex items-center rounded-md text-lg bg-yellow-100 p-2">
              <img
                src="/trending.png"
                height={25}
                width={25}
                className="mr-2"
              />
              <div className=" font-bold">Trending</div>
            </div>
            <div className="absolute w-full rounded-md bg-yellow-50 p-4 shadow-xl">
              {trendingData.slice(0, 10).map((item, index) => (
                <div
                  className="py-1 rounded-md border-b hover:bg-green-600 hover:text-white transition-colors"
                  key={index}
                >
                  <Link href={`/Detail/${item.id}`} target="_blank">
                    <span className="text-lg px-6">{item.original_title}</span>
                  </Link>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SearchTab;
