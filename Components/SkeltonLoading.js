// SkeletonLoading.js

import React from "react";

const SkeletonLoading = () => {
  return (
    <div className="md:w-1/3 bg-gray-200 animate-pulse">
      <div className="w-full h-64 rounded-lg shadow-lg"></div>
    </div>
  );
};

export default SkeletonLoading;
