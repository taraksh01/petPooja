import ShimmerRestaurantSingle from "./ShimmerRestaurantSingle";

const ShimmerRestaurantList = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 m-2 w-10/12 mx-auto">
      {Array(16)
        .fill()
        .map((a, index) => (
          <ShimmerRestaurantSingle key={index} />
        ))}
    </div>
  );
};

export default ShimmerRestaurantList;
