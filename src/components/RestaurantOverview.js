import { useEffect, useState } from "react";
import {
  RestaurantList,
  ShimmerRestaurantList,
  InitialLocation,
  Search,
} from "./exportComponent";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const RestaurantOverview = () => {
  const userLocation = useSelector((store) => store?.location?.details);
  const isAvailable = useSelector((store) => store?.restaurants?.available);
  const banner = useSelector((store) => store?.restaurants?.banner);
  const whatsOnMind = useSelector((store) => store?.restaurants?.whatsOnMind);
  const topRestaurants = useSelector(
    (state) => state?.restaurants?.topRestaurants
  );
  const allRestaurants = useSelector(
    (store) => store?.restaurants?.restaurants
  );
  const bestRestaurantsPlaces = useSelector(
    (store) => store?.restaurants?.bestRestaurantsPlaces
  );
  const bestCuisines = useSelector((store) => store?.restaurants?.bestCuisines);
  const exploreRestaurants = useSelector(
    (store) => store?.restaurants?.exploreRestaurants
  );
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const isOnline = useOnline();

  useEffect(() => {
    setFilteredRestaurants(allRestaurants);
  }, [allRestaurants]);

  const handleSearch = (newSearchText) => {
    console.log(newSearchText, filteredRestaurants);
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

  if (!isAvailable) {
    return (
      <div className="flex justify-center items-center max-w-3xl mx-auto relative text-2xl sm:text-3xl h-screen bg-black">
        <img
          src="https://res.cloudinary.com/swiggy/image/upload/portal/m/location_unserviceable"
          alt="Location Unserviceable"
          className="w-full object-contain"
        />
        <h1 className="absolute bottom-1/2 font-bold">
          Location Unserviceable 😔
        </h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-5/6 lg:w-3/4 mx-auto gap-5">
      {banner?.length > 0 && (
        <div className="m-2">
          <h2 className="text-2xl font-bold">Best offers</h2>
          <div className="flex gap-5 overflow-auto no-scrollbar my-2">
            {banner?.map((item) => (
              <Link to={``} key={item?.entityId} className="min-w-fit">
                <div>
                  <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400/${item?.imageId}`}
                    alt={item?.imageId}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
      {whatsOnMind?.length > 0 && (
        <div className="m-2 shadow-md">
          <h2 className="text-2xl font-bold">Whats on your mind ?</h2>
          <div className="flex overflow-auto no-scrollbar">
            {whatsOnMind?.map((item) => (
              <Link to={``} key={item?.entityId} className="min-w-fit">
                <img
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_150/${item?.imageId}`}
                  alt={item?.imageId}
                />
              </Link>
            ))}
          </div>
        </div>
      )}
      {topRestaurants?.length > 0 && (
        <div className="m-2 shadow-md">
          <h2 className="text-2xl font-bold">
            Top Restaurants in {userLocation?.display_name?.split(",")[0]}
          </h2>
          <RestaurantList top={true} restaurants={topRestaurants} />
        </div>
      )}
      {allRestaurants?.length > 0 && (
        <div className="my-2">
          <h2 className="text-2xl font-bold">
            Restaurants with online food delivery in{" "}
            {userLocation?.display_name?.split(",")[0]}
          </h2>
          <Search
            searchText={searchText}
            handleSearch={handleSearch}
            filteredRestaurants={filteredRestaurants}
            setFilteredRestaurants={setFilteredRestaurants}
            allRestaurants={allRestaurants}
          />
          <RestaurantList restaurants={filteredRestaurants} />
        </div>
      )}
      {bestRestaurantsPlaces?.length > 0 && (
        <div className="m-2">
          <h2 className="text-2xl font-bold">
            Best Places to Eat Across Cities
          </h2>
          <div className="grid grid-rows-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-evenly gap-5 my-2 w-full">
            {bestRestaurantsPlaces?.map((item) => (
              <Link
                to={``}
                key={item?.text}
                className="p-3 text-center rounded-xl border"
              >
                <p className="font-medium">{item?.text}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
      {bestCuisines?.length > 0 && (
        <div className="m-2">
          <h2 className="text-2xl font-bold">Best Cuisines</h2>
          <div className="grid grid-rows-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-evenly gap-5 my-2 w-full">
            {bestCuisines?.map((item) => (
              <Link
                to={``}
                key={item?.text}
                className="p-3 text-center rounded-xl border"
              >
                <p className="font-medium">{item?.text}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
      {exploreRestaurants?.length > 0 && (
        <div className="m-2">
          <h2 className="text-2xl font-bold">Explore Restaurants</h2>
          <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-2 justify-evenly gap-5 my-2 w-full">
            {exploreRestaurants?.map((item) => (
              <Link
                to={``}
                key={item?.text}
                className="p-3 text-center rounded-xl border"
              >
                <p className="font-medium">{item?.text}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantOverview;
