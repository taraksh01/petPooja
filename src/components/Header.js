import { useSelector } from "react-redux";
import { Location } from "./exportComponent";
import fetchRestaurants from "../utils/fetchRestaurants";
import { useState } from "react";

const Header = ({}) => {
  const cartItem = useSelector((store) => store.cart.items);
  const [hideInputBox, setHideInputBox] = useState(true);
  const location = useSelector((store) => store?.location?.details);
  if (location?.place_id) {
    fetchRestaurants();
  }
  return (
    <header className="flex justify-between items-center bg-gray-900 text-white p-2">
      <h1 className="text-3xl font-medium text-orange-400">PetPooja</h1>
      {hideInputBox ? (
        <div>
          <h2
            className="text-xl sm:text-2xl"
            onClick={() => setHideInputBox(!hideInputBox)}
          >
            <span className="font-semibold underline cursor-pointer px-2">
              Other
            </span>
            {location?.display_name}
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
