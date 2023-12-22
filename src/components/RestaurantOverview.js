import { useEffect, useState } from "react";
import {
  RestaurantList,
  ShimmerRestaurantList,
  InitialLocation,
  Search,
} from "./exportComponent";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";

const RestaurantOverview = () => {
  const userLocation = useSelector((store) => store?.location?.details);
  const allRestaurants = useSelector(
    (store) => store?.restaurants?.restaurants
  );
  const isOnline = useOnline();

  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    setFilteredRestaurants(allRestaurants);
  }, [allRestaurants]);

  const handleSearch = (newSearchText) => {
    setSearchText(newSearchText);
  };

  if (userLocation === null) {
    return <InitialLocation />;
  }

  if (!isOnline) {
    return (
      <h1 className="flex justify-center items-center h-[80vh] text-5xl">
        Check your internet connection
      </h1>
    );
  }

  return (
    <div className="flex flex-col items-center gap-5">
      <Search
        searchText={searchText}
        handleSearch={handleSearch}
        filteredRestaurants={filteredRestaurants}
        setFilteredRestaurants={setFilteredRestaurants}
        allRestaurants={allRestaurants}
      />
      {allRestaurants?.length == 0 ? (
        <ShimmerRestaurantList />
      ) : (
        <RestaurantList restaurants={filteredRestaurants} />
      )}
    </div>
  );
};

export default RestaurantOverview;
