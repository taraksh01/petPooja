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
        <div className="m-2 shadow-md">
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
          <RestaurantList restaurants={allRestaurants} />
        </div>
      )}
    </div>
  );
};

export default RestaurantOverview;
