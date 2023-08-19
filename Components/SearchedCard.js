import React from "react";

const SearchedCard = ({ searchedData }) => {
  return (
    <>
      {searchedData.map((movie) => {
        return (
          <article class="flex mb-4 ml-4 bg-yellow-50 rounded-md transition hover:shadow-xl">
            <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
              <time
                datetime="2022-10-10"
                class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
              >
                <span>Release date</span>
                <span class="w-px flex-1 bg-green-400"></span>
                <span>{movie.release_date}</span>
              </time>
            </div>

            <div class=" sm:basis-64">
              <img
                alt={movie.original_title}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                class="aspect-square h-full w-full object-cover"
              />
            </div>

            <div class="flex flex-1 flex-col justify-between">
              <div class="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                <a href="#">
                  <h3 class="font-bold uppercase text-gray-900">
                    {movie.original_title}
                  </h3>
                </a>

                <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-900">
                  {movie.overview}
                </p>
              </div>

              <div class="sm:flex sm:items-end sm:justify-end">
                <a
                target="_blank"
                  href={`/Detail/${movie.id}`}
                  class="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                >
                  View Details
                </a>
              </div>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default SearchedCard;
