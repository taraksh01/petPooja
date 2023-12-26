import ShimmerRestaurantSingle from "./ShimmerRestaurantSingle";

const ShimmerRestaurantList = () => {
  return (
    <div className="grid grid-rows-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-5 my-2 w-full">
      {/* <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 m-2 w-10/12 mx-auto"> */}
      {Array(16)
        .fill()
        .map((a, index) => (
          <ShimmerRestaurantSingle key={index} />
        ))}
    </div>
  );
};

export default ShimmerRestaurantList;
