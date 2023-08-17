import Comments from "@/Components/Comments";
import Description from "@/Components/Description";
import SkeletonLoading from "@/Components/SkeltonLoading";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Detail = () => {
  const router = useRouter();
  const movieId = router.query.id;
  const [detailData, setDetailData] = useState("");
  const [videoData, setVideoData] = useState([]);
  const [keys, setKeys] = useState("");
  const [loading, setLoading] = useState(false);
  

  const detailapi = async () => {

 
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
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
      setDetailData(data);
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error.message).finally(() => setLoading(false));
    }
  };

  const videoOfMovie = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjViMGFlOTQ2ZDI4NzFkNWM5YjI1NzE4YmU1NDJiMSIsInN1YiI6IjY0ZDgzZWZmZDEwMGI2MDBhZGExOGQ1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tohv_fRjj6jkyCBkY4CL_aGURgPHs8fbEuT2AuEcOXw",
            Accept: "application/json",
          },
        }
      );

      const data = await response.json();
      setVideoData(data.results);

      const officialTrailer = data.results.find(
        (item) => item.name === "Official Trailer" && item.type === "Trailer"
      );

      if (officialTrailer) {
        setKeys(officialTrailer.key);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  useEffect(() => {
    detailapi();
    videoOfMovie();
  }, [movieId]);

  function convertMinutesToHoursAndMinutes(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}min`;
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-8 p-8">
        {loading ? (
          <SkeletonLoading />
        ) : (
          <div className="md:w-1/3">
            <img
              src={`https://image.tmdb.org/t/p/w500${detailData.poster_path}`}
              alt={detailData.title}
              className="rounded-lg shadow-lg"
            />
          </div>
        )}

        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold my-4">{detailData.title}</h1>
          <p className="my-3 text-lg ">
            {detailData.genres?.map((genre) => (
              <span
                key={genre.id}
                className="mr-2 px-2 py-2 bg-gray-300 rounded-lg"
              >
                {genre.name}
              </span>
            ))} 
             
          </p>
          <div className="flex pb-4 items-center">
            <Image
              src={"/watch.png"}
              alt="Watch Icon"
              height={20}
              width={20}
              className="mr-2"
            />
            <div className="text-gray-700">
              Duration: {convertMinutesToHoursAndMinutes(detailData.runtime)}
            </div>
          </div>

          <div>
            <iframe
              className="w-full"
              width="100%"
              height="500" // You can adjust the height as needed
              src={`https://www.youtube.com/embed/${keys}`}
              title="YouTube Video Player"
              allowFullScreen
              frameBorder="0"
            />
          </div>

          <div className="flex items-center mb-4">
            <span className="text-lg">{detailData.rating}</span>
          </div>
          <p className="text-gray-700">{detailData.description}</p>
        </div>
      </div>

      {/* #Description */}
      <div className="p-8">
        <Description
        descriptionData={detailData}
        />
      </div>
        {/* #Comments */}
        <div>
          <Comments/>
        </div>
    </div>
  );
};

export default Detail;
