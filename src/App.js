// import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import RestaurantList from "./components/RestaurantList";
import { useState } from "react";
import { restaurant } from "./constants";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState(restaurant);
  const [filteredRestaurants, setFilteredRestaurants] =
    useState(allRestaurants);

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
      <RestaurantList restaurants={filteredRestaurants} />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
