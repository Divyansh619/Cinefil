import React, { useEffect, useState } from "react";

const Navbar = () => {

  const headerData = [
    {
      name: "Movies",
      id: 2,
    },
    {
      name: "TvShows",
      id: 3,
    },
    {
      name: "Actors",
      id: 4,
    },
    {
      name: "NowPlaying",
      id: 5,
    },
    {
      name: "AboutUs",
      id: 6,
    },
  ];

 
  

  return (
    <header class="bg-black">
      <div class="mx-auto   px-4 sm:px-6 lg:px-8">
        <div class="flex h-20 items-center justify-between">
          <div class="md:flex md:items-center md:gap-12">
            <a
              class="flex items-center text-2xl font-bold text-green-600"
              href="/"
            >
              <img src="/logo.png" height={50} width={50} />
              <span>Cinefil</span>
            </a>
          </div>

          <div class="hidden md:block">
            <nav aria-label="Global">
              <ul class="flex items-center gap-6 text-md">
                {headerData.map((item) => {
                  return (
                    <li>
                      <a
                        class="text-green-600   transition hover:text-yellow-500/75"
                        href="/"
                      >
                        {item.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          <div class="flex items-center gap-4">
           
            <div class="sm:flex sm:gap-4">
              <a
                class="rounded-md bg-green-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                href="/"
              >
                Login
              </a>

              <div class="hidden sm:flex">
                <a
                  class="rounded-md bg-green-600 px-5 py-2.5 text-sm font-medium text-white"
                  href="/"
                >
                  Register
                </a>
              </div>
            
            </div>

            <div class="block md:hidden">
              <button class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
