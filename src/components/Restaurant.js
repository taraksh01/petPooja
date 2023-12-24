import { RESTAURANT_IMAGE_URL } from "../constants";

const Restaurant = ({ info }) => {
  const { name, avgRatingString, cuisines, sla, cloudinaryImageId } = info;

  return (
    <div className="w-full max-w-sm bg-gray-100 rounded-2xl cursor-pointer grid grid-rows-1 grid-cols-1 transition-all duration-500 hover:bg-gray-200 hover:scale-105 hover:shadow-md">
      <div className="object-cover w-full h-full">
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660,h_420/${cloudinaryImageId}`}
          alt="restaurant image"
          className="w-full rounded-2xl p-0 h-full"
        />
      </div>
      <div className="p-2 text-gray-800">
        <h2 className="text-lg leading-none font-semibold">{name}</h2>
        <p className="font-semibold flex items-center gap-1">
          {avgRatingString}
          <span className="text-green-700">✪</span> {sla?.slaString}
        </p>
        <p className="text-sm">{cuisines.join(", ")}</p>
      </div>
    </div>
  );
};

export default Restaurant;
