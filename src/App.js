import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import RestaurantOverview from "./components/RestaurantOverview";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <RestaurantOverview />
      <Footer />
    </>
  );
};

const appConfig = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <Error /> },
  { path: "/about", element: <About />, errorElement: <Error /> },
  { path: "/contact", element: <Contact />, errorElement: <Error /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appConfig} />);
