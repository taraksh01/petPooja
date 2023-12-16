import RestaurantList from "./RestaurantList";
import ShimmerRestaurantList from "./ShimmerRestaurantList";
import Search from "./Search";
import { useEffect, useState } from "react";
import {
  SWIGGY_RESTAURANT_API_MOBILE_URL,
  SWIGGY_RESTAURANT_API_URL,
} from "../constants";
import useOnline from "../utils/useOnline";

const RestaurantOverview = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    const data = await fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        SWIGGY_RESTAURANT_API_URL
      )}`
    );
    const res = await data?.json();
    const json = JSON.parse(res.contents);
    setAllRestaurants();
    json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setFilteredRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const handleSearch = (newSearchText) => {
    setSearchText(newSearchText);
  };

  const isOnline = useOnline();

  if (!isOnline) {
    return (
      <h1 className="flex justify-center items-center h-[80vh] text-5xl">
        Check your internet connection
      </h1>
    );
  }

  return (
    <div className="flex flex-col items-center gap-5 bg-green-300">
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
