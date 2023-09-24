import Restaurant from "./Restaurant";
import { restaurant } from "../constants";

const RestaurantList = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 m-2 w-10/12 mx-auto">
      {restaurant.map((res) => (
        <Restaurant info={res?.info} />
      ))}
    </div>
  );
};

export default RestaurantList;
