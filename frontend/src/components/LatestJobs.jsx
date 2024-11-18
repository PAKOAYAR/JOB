import React from "react";
import LatestJobCards from "./LatestJobCards";
import { useSelector } from "react-redux";

const LatestJobs = () => {
  const { alljobs = [] } = useSelector((store) => store.job); // Default to an empty array
  // console.log(alljobs);

  return (
    <div className="max-w-7xl mx-auto my-20">
      <h1 className="text-4xl font-bold">
        <span className="text-[#6A38C2]">Latest & Top </span> Job Openings
      </h1>
      <div className="grid grid-cols-3 gap-4 my-5">
        {alljobs.length === 0 ? (
          <span>No Job Available</span>
        ) : (
          <LatestJobCards /> // Pass job directly
        )}
      </div>
    </div>
  );
};

export default LatestJobs;
