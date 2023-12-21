import { useState } from "react";
import { useDispatch } from "react-redux";
import useLocation from "../utils/useLocation";
import { locationDetails } from "../Store/locationSlice";

const Location = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const setLocation = () => {
    if (input.length > 0) {
      useLocation(input).then((res) => {
        dispatch(locationDetails(res));
        localStorage.setItem("userLocation", JSON.stringify(res));
      });
      setInput("");
    }
  };

  return (
    <div className="flex justify-center items-center gap-2 flex-wrap">
      <input
        className="outline-none border-none p-2 rounded-lg"
        type="text"
        placeholder="Enter your location"
        value={input}
        onChange={(e) => setInput(e?.target?.value)}
      />
      <button
        className="bg-orange-400 p-2 rounded-lg font-semibold text-gray-800"
        onClick={setLocation}
      >
        Search food
      </button>
    </div>
  );
};

export default Location;
