import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const SearchQuery = () => {
    const router=useRouter()
   console.log(router.query.id);
    const [searchValue, setSeacrhValue] = useState("");

    // const searchMovie = async () => {
    //     const options = {
    //       method: "GET",
    //       headers: {
    //         accept: "application/json",
    //         Authorization:
    //           "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjViMGFlOTQ2ZDI4NzFkNWM5YjI1NzE4YmU1NDJiMSIsInN1YiI6IjY0ZDgzZWZmZDEwMGI2MDBhZGExOGQ1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tohv_fRjj6jkyCBkY4CL_aGURgPHs8fbEuT2AuEcOXw",
    //       },
    //     };
    
    //     try {
    //       const response = await fetch(
    //         `https://api.themoviedb.org/3/search/movie?query=${router.query.id}&include_adult=false&language=en-US&page=1`,
    //         options
    //       );
    //       const data = await response.json();
    //       console.log(data);
    //       setSearchData(data.results);
    //     } catch (err) {
    //       console.error(err);
    //     }
    //   };

    //   console.log(searchData,"s");

    //   useEffect(()=>{
    //     searchMovie
    //   },[])

  return (
    <div>{router.query.id}</div>
  )
}

export default SearchQuery