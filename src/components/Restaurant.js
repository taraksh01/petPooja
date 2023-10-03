import { RESTAURANT_IMAGE_URL } from "../constants";

const Restaurant = ({ info }) => {
  const { name, avgRatingString, costForTwo, cuisines, cloudinaryImageId } =
    info;
  return (
    <div className="w-full bg-gray-50 rounded-2xl cursor-pointer flex flex-col hover:bg-gray-200">
      <div className="object-cover w-full h-52">
        <img
          src={RESTAURANT_IMAGE_URL + cloudinaryImageId}
          alt="restaurant image"
          className="w-full rounded-2xl p-0 h-full"
        />
      </div>
      <div className="pl-2">
        <h2 className="text-lg py-1">{name}</h2>
        <p className="font-light text-gray-600">{avgRatingString}</p>
        <p className="font-light text-gray-600">{cuisines.join(", ")}</p>
        <p className="text-gray-800">{costForTwo}</p>
      </div>
    </div>
  );
};

export default Restaurant;
