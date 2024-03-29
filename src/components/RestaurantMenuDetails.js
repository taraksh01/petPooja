import { useParams } from "react-router-dom";
import useRestaurantMenuDetails from "../utils/useRestaurantMenuDetails";
import { RESTAURANT_IMAGE_URL } from "../constants";
import { addItems } from "../Store/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenuDetails = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

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
  } = restaurantDetails[0]?.card?.card?.info;

  const offers =
    restaurantDetails[1]?.card?.card?.gridElements?.infoWithStyle?.offers;

  return (
    <main className="flex flex-col items-center">
      <div className="w-full max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-3xl flex flex-col borde p-4 font-light text-gray-600 text-sm">
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
      <div className="max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-3xl flex p-4 text-gray-700 overflow-auto gap-4 no-scrollbar">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="border min-w-64 rounded-lg border-gray-400 flex-shrink-0 flex flex-col justify-center items-center p-4"
          >
            <div className="text-lg font-medium">{offer?.info?.header}</div>
            <div>
              {offer.info.description} | {offer?.info?.couponCode}
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-3xl">
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
            <div key={index} className="m-2 p-2 shadow-lg shadow-gray-300">
              <div className="text-xl font-medium flex justify-between items-center py-2">
                <div>{res?.card?.card?.title}</div>
                <div className="cursor-pointer">{"🔽"}</div>
              </div>
              <div>
                {res?.card?.card?.itemCards?.map((r) => (
                  <div
                    key={r?.card?.info?.id}
                    className="p-2 leading-6 text-gray-800 flex justify-between items-center gap-12"
                  >
                    <div className="w-11/12">
                      <div className="font-medium">{r?.card?.info?.name}</div>
                      <div className="font-medium">
                        Price: &#8377;{r?.card?.info?.price / 100}
                      </div>
                      <div className="font-light text-sm">
                        {r?.card?.info?.description}
                      </div>
                    </div>
                    <div className="w-60 h-32 flex justify-center items-center m-4 py-4">
                      <img
                        className="rounded-2xl w-60 h-32"
                        src={RESTAURANT_IMAGE_URL + r?.card?.info?.imageId}
                        alt={r?.card?.info?.name + " image"}
                      />
                      <div
                        className="absolute bg-white opacity-80 cursor-pointer self-end px-4 font-semibold rounded-md"
                        onClick={() => {
                          dispatch(addItems(r));
                        }}
                      >
                        ADD
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </main>
  );
};

export default RestaurantMenuDetails;
