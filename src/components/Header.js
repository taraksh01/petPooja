import { useSelector } from "react-redux";
import { Location } from "./exportComponent";
import fetchRestaurants from "../utils/fetchRestaurants";
import { useState } from "react";

const Header = ({}) => {
  const cartItem = useSelector((store) => store.cart.items);
  const location = useSelector((store) => store?.location?.details);
  const [hideInputBox, setHideInputBox] = useState(location ? true : false);

  fetchRestaurants();

  return (
    <header className="flex justify-between items-center bg-gray-900 text-white p-2">
      <h1 className="text-3xl font-medium text-orange-400">PetPooja</h1>
      {hideInputBox ? (
        <div>
          <h2
            className="flex justify-center items-center text-xl sm:text-2xl"
            onClick={() => setHideInputBox(!hideInputBox)}
          >
            <span className="font-semibold underline cursor-pointer px-2">
              Other
            </span>
            <span className="sm:hidden">
              {location?.display_name.split(",")[0]}
            </span>
            <span className="hidden sm:flex">{location?.display_name}</span>
          </h2>
        </div>
      ) : (
        <Location
          hideSearchearch={hideInputBox}
          setHideSearch={setHideInputBox}
        />
      )}
      <nav className="flex text-xl">
        <p className="font-medium">
          Cart
          <span className="font-bold text-orange-400 text-sm relative bottom-2 left-1">
            {cartItem.length}
          </span>
        </p>
      </nav>
    </header>
  );
};

export default Header;
