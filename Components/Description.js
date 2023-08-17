import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Description = ({ descriptionData }) => {
  const router = useRouter();
  const [creditData, setCreditData] = useState({
    cast: [],
    crew: [],
  });

  const creditapi = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${router.query.id}/credits?language=en-US`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjViMGFlOTQ2ZDI4NzFkNWM5YjI1NzE4YmU1NDJiMSIsInN1YiI6IjY0ZDgzZWZmZDEwMGI2MDBhZGExOGQ1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tohv_fRjj6jkyCBkY4CL_aGURgPHs8fbEuT2AuEcOXw",
          },
        }
      );

      const data = await response.json();
      setCreditData({
        cast: data.cast,
        crew: data.crew,
      });
      console.log(data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  useEffect(() => {
    creditapi();
  }, []);

  return (
    <div className="bg-gray-800 rounded-xl p-6 shadow-md">
      <p className="text-lg text-white    border-b border-gray-100  mb-4">{descriptionData.overview}</p>
      <div className="text-lg mb-2 text-white">
        Director:
        <div className="mt-2 space-y-2 ">
          {creditData.crew?.slice(0, 5).map((actor) => (
            <div className="text-sm " key={actor.id}>
              {actor.name}
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-lg text-white">
        Stars:
        <div className="mt-2 flex flex-wrap -mx-4">
          {creditData.cast?.slice(0, 8).map((actor) => (
            <div
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4"
              key={actor.id}
            >
              <div className="bg-white p-4 shadow-md rounded-md flex items-center space-x-4">
                <img
                  src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                  alt={actor.name}
                  height={150}
                  width={150}
                  className="rounded-md"
                />
                <div>
                  <div className="text-lg text-black font-semibold">{actor.name}</div>
                  <div className="text-gray-600 text-sm">
                    Character: {actor.character}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* #Backdrop */}
    </div>
  );
};

export default Description;
