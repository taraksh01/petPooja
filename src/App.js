// import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import RestaurantList from "./components/RestaurantList";
import { useState } from "react";

const App = () => {
  const [searchText, setSearchText] = useState("");

  function handleSearch(newSearchText) {
    setSearchText(newSearchText);
  }
  return (
    <>
      <Header
        searchText={searchText}
        onClick={() => handle()}
        handleSearch={handleSearch}
      />
      <RestaurantList />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
