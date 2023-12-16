import { useState, useEffect } from "react";
import { SWIGGY_RESTAURANT_Details_URL } from "../constants";

const useRestaurantMenuDetails = (id) => {
  const [restaurantDetails, setRestaurantDetails] = useState([]);

  useEffect(() => {
    fetchRestaurantDetails();
  }, []);

  const fetchRestaurantDetails = async () => {
    const data = await fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        SWIGGY_RESTAURANT_Details_URL + id
      )}`
    );
    const res = await data?.json();
    const json = JSON.parse(res.contents);
    setRestaurantDetails(json?.data?.cards);
  };

  return restaurantDetails;
};

export default useRestaurantMenuDetails;
