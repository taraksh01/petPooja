const Restaurant = () => {
  return (
    <div className="w-1/6 bg-gray-50 rounded-2xl cursor-pointer hover:bg-gray-100">
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ee5f8e06b300efc07c9fe3f4df40dfc4"
        alt="restaurant image"
        className="w-full rounded-2xl p-0"
      />
      <div className="pl-2">
        <h2 className="text-lg py-1 font-normal">Restaurant name</h2>
        <p className="font-light text-gray-600">ratings</p>
        <p className="font-light text-gray-600">Restaurant cuisies</p>
        <p className="font-light text-gray-600">price</p>
      </div>
    </div>
  );
};

export default Restaurant;
