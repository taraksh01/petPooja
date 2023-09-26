import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SWIGGY_RESTAURANT_Details_URL } from "../constants";

const RestaurantMenuDetails = () => {
  const { id } = useParams();
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

  if (restaurantDetails.length == 0) return;

  const {
    name,
    cuisines,
    avgRating,
    cloudinaryImageId,
    costForTwoMessage,
    totalRatingsString,
    locality,
    feeDetails,
  } = restaurantDetails[0].card?.card?.info;

  return (
    <main className="flex flex-col items-center">
      <div className="w-5/12 m-4 flex flex-col borde p-4 font-light text-gray-600 text-sm">
        <div className="flex justify-between items-center ">
          <div>
            <h2 className="font-medium text-xl text-gray-700">{name}</h2>
            <p>{cuisines.join(", ")}</p>
            <p>{locality}</p>
          </div>
          <div className="flex flex-col items-center font-normal border border-gray-400 p-2 rounded-lg">
            <p className="text-green-700 font-semibold">{avgRating}</p>
            <p>{totalRatingsString}</p>
          </div>
        </div>
        <p className="my-3">{feeDetails?.message}</p>
        <p className="text-gray-700 font-semibold text-base">
          {costForTwoMessage}
        </p>
      </div>
    </main>
  );
};

export default RestaurantMenuDetails;
