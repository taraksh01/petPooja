import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import RestaurantOverview from "./components/RestaurantOverview";
import RestaurantMenuDetails from "./components/RestaurantMenuDetails";
import Footer from "./components/Footer";
import Error from "./components/Error";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { Suspense, lazy, useState } from "react";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";

const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const App = () => {
  const [user, setUser] = useState({
    name: "Real User",
    email: "real@example.com",
  });
  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user }}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
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
