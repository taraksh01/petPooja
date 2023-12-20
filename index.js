import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./src/App";
import {
  RestaurantMenuDetails,
  RestaurantOverview,
} from "./src/components/exportComponent";
import { Suspense, lazy } from "react";

import store from "./src/Store/store";

const About = lazy(() => import("./src/Pages/About"));
const Contact = lazy(() => import("./src/Pages/Contact"));

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

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={appConfig}>
      <App />
    </RouterProvider>
  </Provider>
);
