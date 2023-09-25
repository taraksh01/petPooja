import Restaurant from "./Restaurant";

const RestaurantList = ({ restaurants }) => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 m-2 w-10/12 mx-auto">
      {restaurants?.map((res) => (
        <Restaurant info={res?.info} key={res?.info?.id} />
      ))}
    </div>
  );
};

export default RestaurantList;
