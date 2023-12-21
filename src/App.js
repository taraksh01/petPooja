import { useDispatch } from "react-redux";
import { Header, Footer } from "./components/exportComponent";
import { Outlet } from "react-router-dom";
import { locationDetails } from "./Store/locationSlice";

const App = () => {
  const userLocation = localStorage.getItem("userLocation");
  const dispatch = useDispatch();
  userLocation && dispatch(locationDetails(JSON.parse(userLocation)));
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
