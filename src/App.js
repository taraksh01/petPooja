import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import RestaurantOverview from "./components/RestaurantOverview";
import RestaurantMenuDetails from "./components/RestaurantMenuDetails";
import Footer from "./components/Footer";
import Error from "./components/Error";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { Suspense, lazy } from "react";

const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appConfig = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <RestaurantOverview />, errorElement: <Error /> },
      {
        path: "/about",
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: (
          <Suspense>
            <Contact />
          </Suspense>
        ),
        errorElement: <Error />,
      },
      { path: "/restaurant/:id", element: <RestaurantMenuDetails /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appConfig} />);
