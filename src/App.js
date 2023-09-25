import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import RestaurantList from "./components/RestaurantList";
import ShimmerRestaurantList from "./components/ShimmerRestaurantList";
import NoSearchResult from "./components/NoSearchResult";
import { useEffect, useState } from "react";
import { SWIGGY_RESTAURANT_API_URL } from "./constants";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    const data = await fetch(SWIGGY_RESTAURANT_API_URL);
    const json = await data?.json();

    setAllRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  function handleSearch(newSearchText) {
    setSearchText(newSearchText);
  }

  return (
    <>
      <Header
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
      {filteredRestaurants?.length == 0 && <NoSearchResult />}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
