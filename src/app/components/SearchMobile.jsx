import React from "react";
import LocationSelection from "./LocationSelection";
import DataSelection from "./DateSelection";
import HoursSelection from "./HoursSelection";

const SearchMobile = () => {
  return (
    <div className="xl:hidden font-medium">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-4">
          {/* location selection */}
          <LocationSelection />
          {/* date Selection */}
          <DataSelection />
          {/* Hours Selection */}
          <HoursSelection />
          {/* btn */}
          <div className="flex items-center px-6">
            <button className="btn btn-sm btn-accent w-[164px] mx-auto">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchMobile;
