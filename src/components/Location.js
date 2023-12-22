import { useState } from "react";
import { useDispatch } from "react-redux";
import useLocation from "../utils/useLocation";
import { locationDetails } from "../Store/locationSlice";

const Location = ({ hideSearch, setHideSearch }) => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const setLocation = () => {
    if (input.length > 0) {
      useLocation(input).then((res) => {
        dispatch(locationDetails(res));
        localStorage.setItem("userLocation", JSON.stringify(res));
      });
      setInput("");
      setHideSearch(!hideSearch);
    }
  };

  return (
    <div className="flex justify-center items-center gap-2 text-gray-900">
      <input
        className="outline-none border-none p-2 rounded-lg"
        type="text"
        placeholder="Enter your location"
        autoFocus
        value={input}
        onChange={(e) => setInput(e?.target?.value)}
      />
      <button
        className="bg-orange-400 p-2 rounded-lg font-semibold"
        onClick={setLocation}
      >
        Search food
      </button>
    </div>
  );
};

export default Location;
