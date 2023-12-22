import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { json } from "react-router-dom";

const useRestaurantMenuDetails = (id) => {
  const [restaurantDetails, setRestaurantDetails] = useState([]);
  const location = useSelector((state) => state.location.details);
  const api = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${location?.lat}&lng=${location?.lon}&restaurantId=${id}`;

  useEffect(() => {
    fetchRestaurantDetails();
  }, []);

  const fetchRestaurantDetails = () => {
    fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(api)}`)
      .then((data) => data.json())
      .then((res) => JSON.parse(res.contents))
      .then((json) => {
        setRestaurantDetails(json?.data?.cards);
      });
  };

  return restaurantDetails;
};

export default useRestaurantMenuDetails;
