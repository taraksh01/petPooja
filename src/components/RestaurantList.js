import Restaurant from "./Restaurant";
import NoSearchResult from "./NoSearchResult";
import { Link } from "react-router-dom";

const RestaurantList = ({ top, restaurants }) => {
  return (
    <>
      {restaurants?.length == 0 ? (
        <NoSearchResult />
      ) : (
        <div
          className={`${
            top
              ? `flex gap-5 overflow-auto no-scrollbar my-2`
              : `grid grid-rows-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-evenly gap-5 m-2 w-full`
          }`}
        >
          {restaurants?.map((res) => (
            <Link
              to={"/restaurant/" + res?.info?.id}
              key={res?.info?.id}
              className="min-w-fit"
            >
              <Restaurant info={res?.info} />
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default RestaurantList;
