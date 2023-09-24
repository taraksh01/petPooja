// import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import RestaurantList from "./components/RestaurantList";
const App = () => {
  return (
    <>
      <Header />
      <RestaurantList />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
