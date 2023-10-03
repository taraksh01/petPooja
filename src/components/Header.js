import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = ({}) => {
  const { user } = useContext(UserContext);
  // console.log(user);

  const cartItem = useSelector((store) => store.cart.items);
  // console.log(cartItem);

  return (
    <header className="flex justify-between items-center bg-gray-300 p-2">
      <h1 className="text-5xl">logo</h1>
      <nav className="flex gap-4 text-xl">
        <p>Offer</p>
        <p>
          Cart
          <span className="font-bold text-sm relative bottom-2 left-1">
            {cartItem.length}
          </span>
        </p>
      </nav>
      <div className="text-xl text-red-600">{user.name}</div>
    </header>
  );
};

export default Header;
