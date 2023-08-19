import Banner from "@/Components/Banner";
import SearchTab from "@/Components/SearchTab";
import SlickCarousel from "@/Components/SlickCarousel";
import React from "react";
import { useEffect, useState } from "react";

const index = () => {
  const [data, setData] = useState({
    popular: [],
  });
  const [upcoming, setUpcoming] = useState([]);
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
      setData.popular(jsonData);
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

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo(0, 0);
  };

  // #MostPopularApi
  const topratedApi = async () => {
    let headersList = {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjViMGFlOTQ2ZDI4NzFkNWM5YjI1NzE4YmU1NDJiMSIsInN1YiI6IjY0ZDgzZWZmZDEwMGI2MDBhZGExOGQ1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tohv_fRjj6jkyCBkY4CL_aGURgPHs8fbEuT2AuEcOXw",
    };
    try {
      let response = await fetch(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200",
        {
          method: "GET",
          headers: headersList,
        }
      );

      let responseData = await response.json();
      setData({
        popular: responseData.results,
      });
      console.log(responseData);
    } catch (error) {
      console.log(error.message);
    }
  };


// Get today's date
const today = new Date();

// Get one month ago from today
const oneMonthAgo = new Date();
oneMonthAgo.setMonth(today.getMonth() + 1);


  // #UpcomingApi
  const UpcomingApi = async () => {
    let headersList = {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjViMGFlOTQ2ZDI4NzFkNWM5YjI1NzE4YmU1NDJiMSIsInN1YiI6IjY0ZDgzZWZmZDEwMGI2MDBhZGExOGQ1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tohv_fRjj6jkyCBkY4CL_aGURgPHs8fbEuT2AuEcOXw",
    };
    try {
      let response = await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`,
        {
          method: "GET",
          headers: headersList,
        }
      );

      let responseData = await response.json();
      setUpcoming(responseData.results);
      console.log(responseData);
    } catch (error) {
      console.log(error.message);
    }
  };



  useEffect(() => {
    apimovie();
    nowPlaying();
    topratedApi();
    UpcomingApi();
  }, [currentPage]); // Fetch data whenever currentPage changes




  const images = [
    {img:'https://ares.shiftdelete.net/2023/06/marvels-spiderman-2-fiyati-cikis-tarihi-1.webp'},
   { img:'https://justfunfacts.com/wp-content/uploads/2022/03/spider-man-1.jpg',}
     
     
  ];



  return (
    <div>
      
      {/* #Banner */}
      <Banner images={images} />
      <div className="w-[95%] mx-auto">
      <SearchTab/>
   

     
        <SlickCarousel carouselData={nowPlayingData} heading={"Now Playing"} />
        {/* <SlickCarousel carouselData={data.popular} heading={"Whats Popular"} /> */}

        <SlickCarousel carouselData={data.popular} heading={"Top Rated"} />

        <SlickCarousel carouselData={upcoming} heading={"UpComing"} />
      </div>
     
    </div>
  );
};

export default index;
