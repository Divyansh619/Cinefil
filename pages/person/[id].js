import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const Actors = () => {
    const [searchValue, setSeacrhValue] = useState([]);
    const router = useRouter()

    const searchedActor=async()=>{
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
              `https://api.themoviedb.org/3/search/person?query=&include_adult=false&language=en-US&page=1`,
              options
            );
            const data = await response.json();
            console.log(data);
            setSeacrhValue(data.results)
          } catch (err) {
            console.error(err);
          }
    }

    useEffect(()=>{
        searchedActor();
    },[])

  return (
    <div>Actors
        {router.query.id}
    </div>
  )
}

export default Actors