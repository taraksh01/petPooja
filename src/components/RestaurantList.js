import Restaurant from "./Restaurant";
import NoSearchResult from "./NoSearchResult";
import { Link } from "react-router-dom";

const RestaurantList = ({ restaurants }) => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 m-2 w-10/12 mx-auto">
      {restaurants?.length == 0 && <NoSearchResult />}
      {restaurants?.map((res) => (
        <Link
          to={"/restaurant/" + res?.info?.id}
          key={res?.info?.id}
          className="w-full md:w-1/5"
        >
          <Restaurant info={res?.info} />
        </Link>
      ))}
    </div>
  );
};

export default RestaurantList;
