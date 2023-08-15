import Banner from "@/Components/Banner";
import Footer from "@/Components/Footer";
import SlickCarousel from "@/Components/SlickCarousel";
import React from "react";
import { useEffect, useState } from "react";

const index = () => {
  const [data, setData] = useState([]);
  const [model, setModel] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [movieId, setMovieId] = useState("");
  const [nowPlayingData, setNowPlayingData] = useState([]);

  const apimovie = async () => {
    setLoading(true);
    try {
      const url = new URL("https://api.themoviedb.org/3/discover/movie");
      url.search = new URLSearchParams({
        include_adult: false,
        include_video: true,
        language: "en-US",
        page: currentPage,
        sort_by: "popularity.desc",
      });

      const response = await fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjViMGFlOTQ2ZDI4NzFkNWM5YjI1NzE4YmU1NDJiMSIsInN1YiI6IjY0ZDgzZWZmZDEwMGI2MDBhZGExOGQ1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tohv_fRjj6jkyCBkY4CL_aGURgPHs8fbEuT2AuEcOXw",
        },
      });

      const jsonData = await response.json();
      setData(jsonData.results);
      const totalCount = Math.ceil(jsonData.total_results / 20);
      setTotalPages(totalCount);
      console.log(jsonData);
    } catch (error) {
      console.error("Error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const nowPlaying = async () => {
    let headersList = {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjViMGFlOTQ2ZDI4NzFkNWM5YjI1NzE4YmU1NDJiMSIsInN1YiI6IjY0ZDgzZWZmZDEwMGI2MDBhZGExOGQ1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tohv_fRjj6jkyCBkY4CL_aGURgPHs8fbEuT2AuEcOXw",
      Accept: "application/json",
    };

    try {
      let response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        {
          method: "GET",
          headers: headersList,
        }
      );

      let data = await response.json();
      setNowPlayingData(data.results);
      console.log(data);
    } catch (error) {
      console.error("Error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    apimovie();
    nowPlaying();
  }, [currentPage]); // Fetch data whenever currentPage changes

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      {/* #Banner */}
      {/* <Banner/> */}

      <div className="w-[95%] mx-auto">
        <SlickCarousel carouselData={nowPlayingData} heading={"Now Playing"} />
        <SlickCarousel
          carouselData={nowPlayingData}
          heading={"Whats Popular"}
        />

        <SlickCarousel carouselData={nowPlayingData} heading={"Top Rated"} />

        <SlickCarousel carouselData={nowPlayingData} heading={"UpComing"} />
      </div>
      {/* #Footer */}
      <Footer />
    </div>
  );
};

export default index;
