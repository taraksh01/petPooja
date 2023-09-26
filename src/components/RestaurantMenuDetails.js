import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { SWIGGY_RESTAURANT_Details_URL } from "../constants";

const RestaurantMenuDetails = () => {
  const { id } = useParams();

  useEffect(() => {
    fetchRestaurantDetails();
  }, []);

  const fetchRestaurantDetails = async () => {
    const data = await fetch(SWIGGY_RESTAURANT_Details_URL + id);
    const json = await data?.json();

    console.log(json);
  };
  return <main className="">{id}</main>;
};

export default RestaurantMenuDetails;
