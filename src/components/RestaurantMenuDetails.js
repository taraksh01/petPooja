import { useParams } from "react-router-dom";
import useRestaurantMenuDetails from "../utils/useRestaurantMenuDetails";

const RestaurantMenuDetails = () => {
  const { id } = useParams();

  const restaurantDetails = useRestaurantMenuDetails(id);

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

  const offers =
    restaurantDetails[1]?.card?.card?.gridElements?.infoWithStyle?.offers;

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
      <div className="w-5/12 m-4 flex p-4 text-gray-700 overflow-x-scroll gap-4 scroll-m-0 no-scrollbar">
        {offers.map((offer) => (
          <div
            key={offer?.info?.id}
            className="border min-w-64 rounded-lg border-gray-400 flex-shrink-0 flex flex-col justify-center items-center p-4"
          >
            <div className="text-lg font-medium">{offer?.info?.header}</div>
            <div>
              {offer.info.description} | {offer?.info?.couponCode}
            </div>
          </div>
        ))}
      </div>
      <div className="w-5/12 m-4">
        {restaurantDetails[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
          .filter(
            (res, index) =>
              index > 0 &&
              index <
                restaurantDetails[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
                  ?.length -
                  2
          )
          .map((res, index) => (
            <div
              key={res?.card?.card?.id}
              className="text-xl font-medium shadow-lg m-2 p-2 shadow-gray-300 flex justify-between"
            >
              <div>{res?.card?.card?.title}</div>
              <div className="cursor-pointer">{"🔽"}</div>
            </div>
          ))}
      </div>
    </main>
  );
};

export default RestaurantMenuDetails;
