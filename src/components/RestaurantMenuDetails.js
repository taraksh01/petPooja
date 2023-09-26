import { useParams } from "react-router-dom";

const RestaurantMenuDetails = () => {
  const { id } = useParams();
  return <main className="">{id}</main>;
};

export default RestaurantMenuDetails;
