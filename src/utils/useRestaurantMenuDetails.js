import { useState, useEffect } from "react";
import { SWIGGY_RESTAURANT_Details_URL } from "../constants";

const useRestaurantMenuDetails = (id) => {
  const [restaurantDetails, setRestaurantDetails] = useState([]);

  useEffect(() => {
    fetchRestaurantDetails();
  }, []);

  const fetchRestaurantDetails = async () => {
    const data = await fetch(SWIGGY_RESTAURANT_Details_URL + id);
    const json = await data?.json();
    console.log(json?.data?.cards);
    setRestaurantDetails(json?.data?.cards);
  };

  return restaurantDetails;
};

export default useRestaurantMenuDetails;
